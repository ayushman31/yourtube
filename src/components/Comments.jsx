import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { Down } from "./icons/Down";
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Comments = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [commentSection , setCommentSection] = useState(false);

  const getComments = async () => {
    const data = await fetch(
      COMMENTS_API + searchParams.get("v") + "&key=" + KEY
    );
    const json = await data.json();
    console.log(json.items);
    setComments(json.items);
  };

  const toggleCommentSection = () => {
    setCommentSection(!commentSection);
  }

  useEffect(() => {
    //for getting the information of the single video
    getComments();
  }, []);
  return (
    <div className="mt-8">
      <div onClick={toggleCommentSection} className="flex w-1/6 items-center gap-4 cursor-pointer">
      <h1 className="text-2xl ">Comments</h1>
      <Down />
      </div>
      {commentSection && <div className="mt-6">
        {comments.map((c) => (
          <div className="flex mt-8 w-[980px] items-center">
          <div className="self-center">
            <img
              className="rounded-full ml-2 w-12 mr-6" alt="pfp"
              src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}
            ></img>
          </div>
          <div className="ml-6 self-center">
            <div className="text-gray-600">{c.snippet.topLevelComment.snippet.authorDisplayName}</div>
            <div className="overflow-hidden">{c.snippet.topLevelComment.snippet.textOriginal}</div>
          </div>
        </div>
        
        ))}
      </div>}
    </div>
  );
};

export default Comments;
