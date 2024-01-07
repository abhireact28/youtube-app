import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Valentinres"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((list, index) => <Button key={index} name={list}/>)
      } 
    </div>
  )
}

export default ButtonList
