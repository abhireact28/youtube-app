import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-col my-16 mx-10 px-4 py-12'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
