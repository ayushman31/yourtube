import React from 'react';

const VideoCard = ({ info }) => {
  // Check if info is defined before destructuring
  if (!info) {
    return null; // or return a loading spinner
  }

  const { snippet, contentDetails, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className='m-5 border-4 border-purple-500 rounded-xl bg-purple-200 hover:bg-purple-300 w-80 p-1 pb-0 shadow-lg'>
      <img alt="video" src={thumbnails.medium.url} className='rounded-xl ' />
      <h3 className='font-semibold'>{title}</h3>
      <p className='text-sm text-gray-500'>{channelTitle}</p>
      <p className='text-sm text-gray-500'>{statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
