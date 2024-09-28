import React from 'react';
import { GoHome } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { MdSportsBaseball } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IconContext } from "react-icons";
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <IconContext.Provider value={{ color: "#a855f7", className: "global-class-name" }}>
    <div className='bg-purple-50 bg-opacity-50 p-5 w-56 m-5 ml-0 rounded-sm shadow-lg'>
      <div className='flex gap-2 items-center m-4 ml-0 mr-0 w-11/12 shadow-sm hover:shadow-lg'>
      <GoHome /> Home
      </div>
      <div className='flex gap-2 items-center m-8 ml-0 mr-0 w-11/12 shadow-sm hover:shadow-lg'>
      <BiLike /> Liked Videos
      </div>
      <div className='flex gap-2 items-center m-8 ml-0 mr-0 w-11/12 shadow-sm hover:shadow-lg'>
      <MdSportsBaseball /> Sports
      </div>
      <div className='flex gap-2 items-center m-8 ml-0 mr-0 w-11/12 shadow-sm hover:shadow-lg'>
      <IoGameController /> Gaming
      </div>
      <div className='flex gap-2 items-center m-8 mb-4 ml-0 mr-0 w-11/12 shadow-sm hover:shadow-lg'>
      <IoMusicalNotes /> Music
      </div>
      <div className='flex gap-2 items-center m-8 mb-4 ml-0 mr-0 w-11/12 shadow-sm hover:shadow-lg'>
      <MdOutlineWorkspacePremium /> Premium
      </div>
    </div></IconContext.Provider>
  )
}

export default Sidebar