import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  }, [])
  return (
    <div>
        {/* <ButtonList /> */}
        <VideoContainer />
    </div>
  )
}

export default MainContainer;
