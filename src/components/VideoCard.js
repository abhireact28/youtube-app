import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    // const {snippet, statistics} = info;
    // const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
      <ul>
        <li className='font-bold py-2'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle?.channelTitle}</li>
        <li>{info?.statistics?.viewCount}</li>
      </ul>
    </div>
  )
}

// export const AdVideoCard = ({info}) => {
//   return(
//     <div className='border border-red-600'>
//       <VideoCard info={info}/>
//     </div>
//   )
// }

export default VideoCard
