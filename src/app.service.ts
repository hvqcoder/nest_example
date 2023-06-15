import { Injectable } from '@nestjs/common';
const { google } = require('googleapis');
@Injectable()
export class AppService {
  getHello(): string {
    //getVideoViews("6l00o17DHSs");
    return 'Hello World!';
  }
}

// async function getVideoViews(videoId) {
//   try {
//     const apiKey = 'AIzaSyCVIeFpuIyTETfjAtyMz2dy8J_s0WVj3I4'; // Thay YOUR_API_KEY bằng khóa API của bạn

//     const youtube = google.youtube({
//       version: 'v3',
//       auth: apiKey,
//     });

//     const response = await youtube.videos.list({
//       part: 'statistics',
//       id: videoId,
//     });

//     if (response.data.items.length > 0) {
//       const video = response.data.items[0];
//       const viewCount = video.statistics.viewCount;
//       console.log('Số lượt xem:', viewCount);
//     } else {
//       console.log('Video không tồn tại hoặc không có quyền truy cập.');
//     }
//   } catch (error) {
//     console.error('Đã xảy ra lỗi:', error.message);
//   }
// }