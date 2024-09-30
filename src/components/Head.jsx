import React from 'react';
import { CgMenuOreos } from "react-icons/cg";
import { IoSearchCircle } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

  return (
    <div className=' header grid grid-flow-col '>
        <IconContext.Provider value={{ color: "#a855f7", className: "global-class-name" }}>
        <div className='menu-icon col-span-1  ml-4 mt-5' ><button className='h-12 w-12'>
            <CgMenuOreos onClick={() => toggleMenuHandler()} className='h-full w-full'/></button></div></IconContext.Provider>


        <div className='center-part col-span-1 place-content-center place-self-center flex ml-6 content-center bg-white shadow-lg rounded-full mt-5 p-2 w-5/6'>
        <img src="/yourtube.jpeg" alt="YourTube" className='rounded-full h-14' />
        <span className='h-12'><h1 className='text-4xl  ml-1 bg-purple-500 p-2 text-white rounded-full'>YourTube</h1></span>
        
        <div className=' flex ml-20  content-center '>
            <input type='text' className='border border-solid border-purple-500 rounded-full h-10 w-80 p-1 mt-2 '></input>
            <IconContext.Provider value={{ color: "#a855f7", className: "global-class-name" }}>
            <button className='h-12 w-12  '><IoSearchCircle className='h-full w-full mt-1'/></button></IconContext.Provider>    
        </div>
        </div>


        <IconContext.Provider value={{ color: "#a855f7", className: "global-class-name" }}>
        <div className=' col-span-1 right mt-5 self-center place-self-end mr-10 h-8 w-8'>
        <FaRegUser className='red h-full  w-full' />
        </div>
        </IconContext.Provider>

    </div>
  )
}

export default Head