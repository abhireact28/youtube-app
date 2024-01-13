import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import WatchPageVideos from './WatchPageVideos';
import { YOUTUBE_VIDEO_INFO_API } from '../utils/constrant';
import { formatYouTubeViews } from '../utils/helper';

const WatchPage = () => {
  const [watchPageInfo, setWatchPageInfo] = useState([])
  const [searchParams] = useSearchParams()
  // console.log(searchParams.get("v"))
  const dispatch = useDispatch()
  const videoId = searchParams.get("v")
  useEffect(() => {
      dispatch(closeMenu())
      getInfo()
  }, [videoId])

  const getInfo = async () => {
      const data = await fetch(YOUTUBE_VIDEO_INFO_API + videoId)
      const json = await data.json()
      setWatchPageInfo(json?.items[0])
      // console.log(json?.items[0])
  }
  return (
      <>
          <div className='md:flex absolute z-10 w-screen md:w-[800px] mt-6 md:mt-20 md:ml-[200px]'>
              <div className='bg-white md:w-full'>
                  <div className='flex flex-col'>
                      <div className=' md:pl-5 mt-20 w-full md:w-[800px]'>
                          <iframe  className='w-screen h-72 md:h-[460px] md:w-[800px]'
              
                              src={"https://www.youtube.com/embed/" + videoId}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen>
                          </iframe>
                      </div>
                      <div className=''>{watchPageInfo && (
                          <div className="px-3 md:px-6 py-3  w-screen md:w-auto ">
                              <h1 className="text-xl font-bold ">{watchPageInfo?.snippet?.title}</h1>
                              <h1 className="mt-2 text-l font-semibold">
                                  {watchPageInfo?.snippet?.channelTitle}
                              </h1>
                              <h1 className="mb-1 font-medium text-sm">
                                  {formatYouTubeViews(watchPageInfo?.statistics?.viewCount)} Views
                              </h1>
                          </div>
                      )}</div>
                      <div className='pt-4 md:pl-3 w-screen md:w-[800px]'>
                          <CommentsContainer />
                      </div>
                      <div className='md:w-[800px] w-screen'>
                          <LiveChat />
                      </div>

                  </div>
              </div>

              <div className='mt-16'>
                  <WatchPageVideos />
              </div>

          </div>
      </>
  )
}

export default WatchPage
