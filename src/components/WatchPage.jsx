import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { CHANNEL_API, VIDEO_API } from "../utils/constants";
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo , setVideoInfo] = useState(null);
  const [channelImage , setChannelImage] = useState(null)

  const dispatch = useDispatch(); //for closing the sidebar
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
 
 
    useEffect( ()=>{            //for getting the information of the single video
        getVideoInfo();
      },[])

  const getVideoInfo = async () => {
    const data = await fetch(VIDEO_API+searchParams.get('v')+'&key='+KEY);
    const json = await data.json();
    setVideoInfo(json.items[0]);
   // console.log(json.items[0]);
    
    //console.log(videoInfo); 
  }
 
  if (!videoInfo) return <div>Loading...</div>
   
  const { snippet, contentDetails, statistics } = videoInfo;
  const { channelTitle, title , channelId } = snippet;
 
  const getChannelImage = async() => {
    const data =await fetch(CHANNEL_API+channelId+"&fields=items%2Fsnippet%2Fthumbnails&key="+KEY);
    const json =await data.json();
    console.log(json.items[0]?.snippet?.thumbnails?.medium.url);
    setChannelImage(json.items[0]?.snippet?.thumbnails?.medium.url) 
  }
  getChannelImage();
  
  

  return (
    <div className="m-10 ml-20"> 
      <iframe
        width="980"
        height="480"
        src={"https://www.youtube.com/embed/"+searchParams.get('v')}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl "
      ></iframe>
      <h1 className="font-bold text-xl m-2 ml-0">{title}</h1>
      <div className="flex">
      <img alt="Channel img" src={channelImage} className="rounded-full size-10"></img>
      <h2 className="font-semibold self-center text-base m-2">{channelTitle}</h2>
      </div>
      
    </div>
  );
};

export default WatchPage;
