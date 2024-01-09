import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    //  Early Return Pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-6 py-10 my-16 shadow-lg w-40'>
      <ul>
        <li ><Link to={"/"}>Home</Link></li>
        <li>Videos</li>
        <li>Sports</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li><i class='fas fa-music'>Music</i></li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar;
