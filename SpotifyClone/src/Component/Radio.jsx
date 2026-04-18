/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Radio = () => {
    // eslint-disable-next-line no-unused-vars
    const radios =[
        {
          "title": "Arijit Singh",
          "description": "With Atif Aslam, Sachin-Jigar, Vishal-Shekhar, and more",
          "coverImage": "https://www.bollywoodhungama.com/wp-content/uploads/2022/12/Arijjit-Singh-Concert.jpeg"
        },
        {
          "title": "Alka Yagnik",
          "description": "With Abhijeet, Jatin-Lalit, Kumar Sanu, and more",
          "coverImage": "https://www.hindustantimes.com/ht-img/img/2024/06/18/1600x900/Alka-Yagnik_1718689651011_1718689651274.jpg"
        },
        {
          "title": "Diljit Dosanjh",
          "description": "With Karan Aujla, Shubh, Badshah, and more",
          "coverImage": "https://assets.vogue.in/photos/650834d7d70eb7f1f666fd29/2:3/w_2560%2Cc_limit/Snapinsta.app_343111618_237478218937905_980114793430031196_n_1080.jpg"
        },
        {
          "title": "Shreya Ghoshal",
          "description": "With A.R. Rahman, Vishal-Shekhar, Atif Aslam, and more",
          "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXHrWvaE1ubq_Da_ZSgrzsyO7rxg9cszPIQ&s"
        },
        {
          "title": "KK",
          "description": "With Armaan Malik, Ankit Tiwari, Atif Aslam, and more",
          "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9gYIxXj7VwdqYHS_lC37o6p1u-qrDUssHw&s"
        },
        {
          "title": "Yo Yo Honey Singh",
          "description": "With Diljit Dosanjh, Badshah, Harrdy Sandhu, and more",
          "coverImage": "https://i.scdn.co/image/ab67616d0000b273aad3f4b601ae8763b3fc4e88"
        }
      ]
  return (
    <>
    <div className='w-full  rounded-xl flex flex-col mt-4 '>
        <div className='w-full flex justify-between items-end  '>
            <p className='text-white font-bold  text-2xl m-2  hover:underline'>Popular Radio</p>
            <p className='text-[#b3b3b3] font-bold m-2  text-sm hover:underline'>Show all</p>
        </div>
        <div className='flex'>
          
            {radios.map((radio)=>{
                return(
                    <div className='w-44 text-white hover:bg-[#b3b3b3] hover:bg-opacity-20 rounded-2xl'>
                        <img 
                        className='h-[150px] w-[150px] m-[10px] overflow-hidden rounded-2xl object-cover '
                        src={radio.coverImage} alt={radio.title} />
                        <p className=' ml-5 text-sm line-clamp-2'>{radio.description}</p>
                        
                    </div>
                )
            })}
            <div className=''>

            </div>
        </div>
    </div>
    </>
  )
}

export default Radio