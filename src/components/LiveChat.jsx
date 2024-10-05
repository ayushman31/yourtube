import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {

    useEffect(() => {
        const i = setInterval(() =>{          //API Polling
            console.log("API polling")
        } , 2000)

        return () => clearInterval(i)
    } , [])

  return (
    <div className="ml-2 p-2 border border-black w-full h-[480px] rounded-lg bg-slate-50">
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
      <ChatMessage name='Ayushman Singh' message='Hey, im ayushman.♾️'/>
    </div>
  );
};

export default LiveChat;
