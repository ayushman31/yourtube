const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key="+KEY;

export const VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="

//export const SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="; //+&key=
//export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q="; //+&key=
export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" //+&key=

export const OFFSET_LIVECHAT = 15;

export const BACKEND_URL = "http://localhost:3002/api/v1"