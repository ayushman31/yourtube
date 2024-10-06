import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() =>{          //API Polling
            console.log("API polling")
            dispatch(addMessage({
                name: 'Ayushman Singh',
                message: 'Hey, im ayushman♾️'
            }))
        } , 2000)

        return () => clearInterval(i)
    } , [])

  return (
    <div className="ml-2 p-2 border border-black w-full h-[480px] rounded-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c,i) => <ChatMessage key={i} name={c.name} message={c.message}/>)}
    </div>
  );
};

export default LiveChat;
