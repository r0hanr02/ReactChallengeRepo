// import React from 'react'
import { VscLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";

const YourLibrary = () => {
  return (
    <>
      <div className="bg-[#121212] w-1/4 m-2 h-full rounded-xl sticky top-[10%] left-0" >
        <div className="flex justify-between items-start sticky  ">
          <div className="flex items-center  ">
            <VscLibrary className="p-2" size={50} color="gray" />
            <p className="font-bold text-lg text-[#b3b3b3] ">
              Your Library
            </p>
          </div>
          <div>
            <IoMdAdd className="p-2" size={50} color="gray" />
          </div>
        </div>
        <div>
          <div className="bg-[#212121] m-2 rounded-lg p-2 my-10">
            <p className="text-lg text-white m-2 font-bold">
              Create Your First playlist
            </p>
            <p className="text-md text-white m-2">
              Its easy ,we&apos;ll help you
            </p>
            <button className=" bg-white m-2  font-bold p-2 rounded-2xl">
              Create playlist
            </button>
          </div>
          <div className="bg-[#212121] m-2 rounded-lg p-2">
            <p className="text-lg text-white m-2 font-bold">
              Lets find some podcasts to follow{" "}
            </p>
            <p className="text-md text-white m-2">
              We&apos;ll keep you update on new episodes
            </p>
            <button className=" bg-white m-2  font-bold p-2 rounded-2xl">
              Browse Podcasts
            </button>
          </div>
          <div className="flex flex-col flex-wrap mt-[30px] mx-6 mb-2">
            <div className="flex flex-wrap ">
              <p className="text-[#b3b3b3] font-semibold text-xs  m-1 hover:text-white">
                Legals
              </p>
              <p className="text-[#b3b3b3] font-semibold text-xs  m-1  hover:text-white">
                Safety & Privacy Center
              </p>
              <p className="text-[#b3b3b3] font-semibold text-xs  m-1  hover:text-white">
                Private Policy
              </p>
              <p className="text-[#b3b3b3] font-semibold text-xs  m-1  hover:text-white">
                Cookies
              </p>
              <p className="text-[#b3b3b3] font-semibold text-xs  m-1  hover:text-white">
                Abouts Ads
              </p>
              <p className="text-[#b3b3b3] font-semibold text-xs  m-1  hover:text-white">
                Accessibity
              </p>
            </div>
            <p className="text-white hover:underline font-semibold text-sm m-1  hover:text-white">
              Cookies
            </p>
            <div className="flex border-2 items-center  w-[100px] rounded-3xl hover:scale-105 duration-150">
            <AiOutlineGlobal className="m-2" size={20} color="white" />
            <p className="text-white font-bold text-sm">English</p>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default YourLibrary;
