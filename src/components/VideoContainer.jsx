import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  
  const [videos , setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  } 

  return (
    <div className="flex flex-wrap p-5 m-2 w-full  gap-3">
      {videos.map((video) => (
        <Link to={'/watch?v='+video.id }><VideoCard key={video.id} info={video} /></Link>))}
    </div>
  )
}

export default VideoContainer;