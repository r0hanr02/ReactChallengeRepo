/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const PopArtist = () => {
    const artists =[
              {
                "name": "Pritam",
                "tag": "card.tag.artist",
                "image": "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca"
              },
              {
                "name": "Arijit Singh",
                "tag": "card.tag.artist",
                "image": "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7"
              },
              {
                "name": "Sachin-Jigar",
                "tag": "card.tag.artist",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRz90MnCG8YWvb4PgUUVTOmVBOnwlJ4cZZnH6xMXMozNCkjKTk2ESOEUKAnaIHKgAZYVfqNl3BMA7Z57SajwxHQ5w"
              },
              {
                "name": "A.R. Rahman",
                "tag": "card.tag.artist",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUF2O0TWJfVkwcPoLD7TqtSV5DEJ85O_3t2SsUIXQspQtUHLmfVITRsrgtQQ4f60IS-O3tip6JT-5UoOEYdI2_eg"
              },
              {
                "name": "Vishal-Shekhar",
                "tag": "card.tag.artist",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrRDM4YdbpcL_h7sL9DUsnio_r4ucW7W3u4FiM9FKTIzMv9n4GA-sdGzE-bVnNpnbsMsrE_D4osbhBqll_x2u3w"
              },
              {
                "name": "Atif Aslam",
                "tag": "card.tag.artist",
                "image": "https://img.indiaforums.com/person/640x480/0/2164-atif-aslam.jpg?c=7vP7E1"
              }
            
    ]
  return (
    <>
    <div className='w-full rounded-xl flex flex-col mt-4'>
        <div className='w-full flex justify-between items-end  '>
            <p className='text-white font-bold  text-2xl m-2  hover:underline'>Popular Artists</p>
            <p className='text-[#b3b3b3] font-bold m-2  text-sm hover:underline'>Show all</p>
        </div>
        <div className='flex'>
            {artists.map((artist)=>{
                return(
                    <div className='w-full text-white hover:bg-[#b3b3b3] hover:bg-opacity-20 rounded-2xl'>
                        <img 
                        className='h-[150px] w-[150px] m-[11px] overflow-hidden  rounded-full object-cover '
                        src={artist.image} alt={artist.tag} />
                        <p className=' ml-5 font-bold'>{artist.name}</p>
                        <p className='ml-5'>Artist</p>
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

export default PopArtist