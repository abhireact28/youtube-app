const GOOGLE_API_KEY = 'AIzaSyDOEA03JD-U7oRFGcH_Wtcj6q6rcxKdGtw';

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SUGGESTION_API ="https://corsproxy.io?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const YOUTUBE_VIDEO_INFO_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
GOOGLE_API_KEY +"&id=";