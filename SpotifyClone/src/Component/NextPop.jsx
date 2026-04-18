/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'

const NextPop = () => {
    const albums =[
        {
          "title": "GLORY",
          "artist": "Yo Yo Honey Singh",
          "coverImage": "https://assets.telegraphindia.com/telegraph/2024/Aug/1723612602_yo-yo-honey-singh.jpg"
        },
        {
          "title": "Aashiqui 2",
          "artist": "Mithoon, Ankit Tiwari, Jeet Gannguli",
          "coverImage": "https://i.pinimg.com/originals/ad/e1/fd/ade1fd4e7b89cdc1d05cea058d66b3b3.jpg"
        },
        {
          "title": "Who (Remixes)",
          "artist": "Jimin",
          "coverImage": "https://i.scdn.co/image/ab67616d0000b2737f35adfbec3bb2bc8256802b"
        },
        {
          "title": "Yeh Jawaani Hai Deewani",
          "artist": "Pritam",
          "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ20o9lCTKQ8_3Ib6D--cw_QTS1ZtqqSOyA&s"
        },
        {
          "title": "Jo Tum Mere Ho",
          "artist": "Anuv Jain",
          "coverImage": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1068072&t=1722590764449"
        },
        {
          "title": "Making Memories",
          "artist": "Karan Aujla, Ikky",
          "coverImage": "https://i.scdn.co/image/ab67616d0000b273bb25239324c4e16ae01fda36"
        }
      ]
  return (
    <>
    <div className='w-full rounded-xl flex flex-col mt-4'>
        <div className='w-full flex justify-between items-end  '>
            <p className='text-white font-bold  text-2xl m-2  hover:underline'>Top Albums and singles</p>
            <p className='text-[#b3b3b3] font-bold m-2  text-sm hover:underline'>Show all</p>
        </div>
        <div className='flex'>
            {albums.map((album)=>{
                return(
                    <div className='w-full text-white hover:bg-[#b3b3b3] hover:bg-opacity-20 rounded-2xl'>
                        <img 
                        className='h-[150px] w-[150px] m-[11px] overflow-hidden rounded-2xl object-cover'
                        src={album.coverImage} alt={album.tag} />
                        <p className=' ml-5 font-bold'>{album.title}</p>
                        <p className='ml-5'>{album.artist}</p>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default NextPop