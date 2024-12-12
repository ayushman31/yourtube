import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL, API_KEY } from '../utils/constants'; // Ensure you have the correct path to your config file
import { Link } from 'react-router-dom';
import LikedVideoCard from './LikedVideoCard';
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// Define fetchLikedVideos function within the same file
const fetchLikedVideos = async (videoIds, apiKey) => {
  const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'snippet,contentDetails,statistics',
      id: videoIds.join(','),
      key: apiKey
    }
  });

  return response.data.items;
};

const LikedContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getLikedVideos();
  }, []);

  const getLikedVideos = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      if (!token) {
        console.log('No token found');
        return;
      }

      const response = await axios.get(`${BACKEND_URL}/like`, {
        headers: {
          token: token // Include the token in the request headers
        }
      });

      const videoIds = response.data.videoList.map(video => video.videoId);
      const videoData = await fetchLikedVideos(videoIds, KEY ); // Use the local function
      setVideos(videoData);
    } catch (e) {
      console.error('Error fetching videos:', e); // More descriptive error logging
    }
  };

  return (
    <div className="flex flex-wrap p-5 m-2 w-full gap-3">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <LikedVideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default LikedContainer;
