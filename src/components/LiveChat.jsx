import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      //console.log("API polling")
      dispatch(
        addMessage({
          name: "Ayushman Singh",
          message: "Hey, im ayushman♾️",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="ml-2 p-2 border border-black h-[480px] rounded-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="border p-2 border-black ml-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anshuman",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="w-80 p-1"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-2 bg-green-100 border border-black p-1 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
