// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { YOUTUBE_SEARCH_API } from "../utils/constrant";

// const SearchResults = () => {
// 	const [queryParams] = useSearchParams();
// 	const [videos, setVideos] = useState([]);
// 	console.log(queryParams.get("q"));

// 	useEffect(() => {
// 		getVideos();
// 	}, [queryParams.get("q")]);

// 	const getVideos = async () => {
// 		const data = await fetch(YOUTUBE_SEARCH_API + queryParams.get("q"));
// 		const json = await data.json();
// 		// console.log(json.items);
// 		setVideos(json.items);
// 		console.log(json.items)
// 	};
// 	if (videos.length === 0) {
// 		return <div>Loading...</div>;
// 	}
// 	return (
// 		<div className=" md:w-auto  flex flex-col md:ml-24 mt-20  overflow-x-hidden">
// 			{videos.map((video) => {
// 				if (video.id.kind === "youtube#video") {
// 					return (
// 						<Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
// 							{/* <Videos info={video} /> */}
// 							<div className=' p-2 m-2  h-[120px] md:flex items-top md:mb-24 mb-80'>
// 								<div className=''>
// 									<img className='rounded-lg md:w-[368px] h-[201px] w-screen ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
// 								</div>
// 								<div className='md:ml-5 md:w-[600px] w-screen  mt-3 md:mt-0 '>
// 									<ul className=""> 
// 										<li className='text-[20px] font-bold md:w-auto w-[370px]'>{video?.snippet?.title}</li>
// 										<li className="text-[16px]">{video?.snippet?.channelTitle}</li>
// 										<li className="md:w-auto w-[370px]">{video?.snippet?.description}</li>
// 										{/* <li className='text-[14px]'>{video?.statistics?.viewCount} views</li> */}

// 									</ul>
// 								</div>

// 							</div>
// 						</Link>
// 					);
// 				}
// 			})}
// 		</div>
// 	);
// };

// export default SearchResults;
