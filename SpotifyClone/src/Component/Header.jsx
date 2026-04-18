// import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='sticky top-0 z-20 w-full h-16 bg-black flex items-center justify-between'>
        <div className='mx-10'>
            <FaSpotify size={40} color='white'/>
        </div>
        <div className='w-[30%] flex items-center gap-3 justify-center'> 
            <AiFillHome 
            className=" bg-[#212121] w-[10%] h-full rounded-full p-1"
            size={30} color='white' />
            <div className="w-[90%]">
                <input 
                className='w-full h-12 p-2 font-bold rounded-3xl bg-[#212121] hover:border-white hover:border-2 text-white'
                type="text" 
                placeholder='What do you want to play?'/>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-md m-2 font-bold text-gray-200 hover:text-white'>Sign up</p>
            <p className='text-md m-2 font-bold bg-white p-3 rounded-3xl'>Log In</p>
        </div>
    </div>
  )
}

export default Header