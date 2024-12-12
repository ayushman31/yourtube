import React from 'react';

const LikedVideoCard = ({ video }) => {
  if (!video || !video.snippet) {
    return null; // or return a loading spinner
  }

  console.log(video);
  

  const { snippet, contentDetails, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className='m-5 border-4 border-purple-500 rounded-xl bg-purple-200 hover:bg-purple-300 w-80 p-1 pb-0 shadow-lg'>
      <img alt="video" src={thumbnails.medium.url} className='rounded-xl' />
      <h3 className='font-semibold'>{title}</h3>
      <p className='text-sm text-gray-500'>{channelTitle}</p>
      <p className='text-sm text-gray-500'>{statistics.viewCount} views</p>
    </div>
  );
};

export default LikedVideoCard;
