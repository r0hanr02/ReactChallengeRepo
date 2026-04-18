/* eslint-disable no-unused-vars */
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full rounded-xl flex  flex-col mt-24'>
        <div className='flex items-start justify-around'>
        <div>
            <p className='font-bold text-white'>Company</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>About</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Jobs</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>For the Record</p>
        </div>
        <div>
            <p className='font-bold text-white'>Communities</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>For Artists</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>For Developers</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Advertising</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Investor</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Vendors</p>
        </div>
        <div>
            <p className='font-bold text-white'>Useful Links</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Support</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Free Mobile App</p>
        </div>
        <div>
            <p className='font-bold text-white'>Spotify Plans</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Premium Individual</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Premium Duo</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Premium Student</p>
            <p className='text-[#b3b3b3] text-sm hover:underline'>Spotify Free </p>
        </div>
        <div className='w-48 flex justify-around'>
            <div
            
            className='bg-[#121212] p-2 rounded-full hover:bg-[#212121]'>
                <FaTwitter size={30} color='white'/>
            </div>
            <div
            className='bg-[#121212] p-2 rounded-full hover:bg-[#212121]'>
                <FaFacebook size={30} color='white'/>
            </div>
            <div
            className='bg-[#121212] p-2 rounded-full hover:bg-[#212121]'>
                <FaInstagram size={30} color='white'/>
            </div>
        </div>
        </div>
        <hr className='ml-[5%] mt-20 w-[90%]'/>
        <p className='text-[#b3b3b3] ml-8 mt-16 mb-20 font-semibold text-sm'>&copy; 2025 Spotify AB</p>
    </div>
  )
}

export default Footer