import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../utils/constrant'
import { formatYouTubeViews } from '../utils/helper'
// import { formatYouTubeViews} from '../utils/helper'

const WatchPageVideos = () => {
    const [watchVideos, setWatchVideos] = useState([])

    useEffect(() => {
        getWatchVideos()
    }, [])

    const getWatchVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const json = await data.json()
        setWatchVideos(json?.items)
    }
    return (
        <div className='overflow-y-scroll flex flex-col-reverse overflow-x-hidden no-scrollbar h-[1000px]'>
            {watchVideos.map((watchVideos) => {
                return (
                    <Link to={"/watch?v="+watchVideos.id}  key={watchVideos.id}>
                    <div className=' md:p-2 md:m-2 md:ml-16 w-screen md:w-[402px] h-[120px] flex  justify-evenly items-top '>
                        <div className=''>
                            <img className='rounded-lg w-[168px] h-[94px] ' alt='thumbnail' src={watchVideos?.snippet?.thumbnails?.medium?.url} />
                        </div>
                        <div className='w-[200px]'>
                            <ul>
                                <li className='text-[13px] overflow-x-hidden font-bold'>{watchVideos?.snippet?.title}</li>
                                <li className="text-[12px] overflow-x-hidden">{watchVideos?.snippet?.channelTitle}</li>
                                {/* <li>{info?.snippet?.publishedAt}</li> */}
                                <li className='text-[10px]'>{formatYouTubeViews(watchVideos?.statistics?.viewCount) }views</li>

                            </ul>
                        </div>

                    </div>
                    </Link>
                )

            })}

        </div>
    )
}

export default WatchPageVideos