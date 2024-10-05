import React from "react";

const ChatMessage = ({name , message}) => {
return (
    <div className="flex items-center mt-2">
      <img
        className="rounded-full h-8"
        alt="img"
        src="https://yt3.ggpht.com/ytc/AIdro_nITNgAO8C1jtrFafsnNgZ-xMerRvbtRlFKZaD03CjhrNY=s48-c-k-c0x00ffffff-no-rj"
      />
      <span className="ml-4 font-semibold">{name}</span>
      <span className="ml-2 text-gray-950">{message}</span>
    </div>
  );
};

export default ChatMessage;
