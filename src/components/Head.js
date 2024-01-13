import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constrant';
import { cacheResults } from '../utils/searchSlice';
import {useSelector} from "react-redux"

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {

    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
  }, 200);

    return () => {
      clearTimeout(timer);
    };

  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery)
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1])

    // update cache
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }));
    
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className='grid grid-flow-col m-2 p-4 shadow-lg fixed top-0 left-0 w-full z-[100] mb-6'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='h-6 cursor-pointer' src="https://miro.medium.com/max/600/0*M7czzJnPWF84U-j7.png" alt="menu" />
        <a href="/">
        <img className='h-8 mx-2' src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg" alt="img" />
        </a>
      </div>

      <div className='col-span-10 px-10'>
        <div>
        <input 
        className='px-5 w-1/2 border border-gray-400 outline-none p-2 rounded-l-full' 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100 '>Search</button>
        </div>
        {showSuggestions && (
        <div className="fixed bg-white py-2 px-5 w-[46rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {
              suggestions?.map((s) => (
              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍{s}
              </li>
              ))
            }
          </ul>
        </div>
        )}
      </div>

      <div className='col-span-1'>
        <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
      </div>
    </div>
  )
}

export default Head;
