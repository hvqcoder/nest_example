import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@ObjectType({ description: 'recipe ' })
@Entity({ name: 'recipe' })
export class Recipe {
  @Field(type => ID)
  @Column({
    name: 'id',
  })
  id: string;

  @Directive('@upper')
  @Column({
    name: 'title',
  })
  title: string;

  @Field({ nullable: true })
  @Column({
    name: 'description',
    nullable: true,
  })
  description?: string;

  @Field()
  @Column({
    name: 'creationDate',
  })
  creationDate: Date;

  @Field(type => [String])
  @Column({
    name: 'ingredients',
  })
  ingredients: string[];
}