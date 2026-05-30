import React from 'react'
import { albumsData, artistsData, assets, songsData } from '../data/assets'
import { PlayIcon } from 'lucide-react'


const Home = () => {
  return (
    <div className='bg-white/10 rounded-lg p-5 w-full min-h-screen'>
        <div className='mt-5'>
            <div className='flex justify-between items-center mb
            '>
                <h1 className='text-2xl font-bold hover:underline'>Trending Songs</h1>

                <p className='text-gray-400'>Show all</p>
            </div>
            

            <div className='flex overflow-scroll flex-1 gap-2.5'>
                {songsData.map((songs, i)=>(
                    <div key={i} className='flex w-40 flex-col'>
                        <div className='container shrink-0 overflow-hidden relative w-40 h-40 rounded-lg'>
                            <img src={songs.image} className='w-full object-cover rounded-lg'/>
                            <span className='h-10 w-10 rounded-full justify-center items-center bg-green-600 text-black absolute bottom-0 right-0 hover hidden'>
                               <PlayIcon  fill='black' size={20}/> 
                            </span>
                            
                        </div>
                        <h1 className='font-bold'>{songs.name}</h1>
                        <p className='text-gray-400'>{songs.desc}</p>
                    </div>
                ))}

            </div>
        </div>
        <div className='flex justify-between items-center mt-20 my-5
            '>
                <h1 className='text-2xl font-bold hover:underline'>Popular Artist</h1>

                <p className='text-gray-400'>Show all</p>
            </div>
            <div className='flex gap-2.5 overflow-scroll'>
                {artistsData.map((artist, i)=>(
                    <div key={i} className='flex flex-col gap-1.5'>
                            <div className='container shrink-0 overflow-hidden relative w-40 h-40 rounded-lg'>
                            <img src={artist.image} className='w-full object-cover rounded-full'/>
                            <span className='h-10 w-10 rounded-full justify-center items-center bg-green-600 text-black absolute bottom-0 right-0 hover hidden'>
                               <PlayIcon  fill='black' size={20}/> 
                            </span>
                           
                        </div>
                        <p className='font-bold'>{artist.name}</p>
                           <p className='text-gray-400 text-sm'>Artist</p>
                    </div>
                ))}
            </div>

        <div>
            <div className='flex justify-between items-center mt-20 my-5
            '>
                <h1 className='text-2xl font-bold hover:underline'>Popular Albums</h1>

                <p className='text-gray-400'>Show all</p>
            </div>

            <div className='flex overflow-scroll gap-2.5'>
                {albumsData.map((album, id)=>(
                    <div key={id}>
                        <div className='container shrink-0 overflow-hidden relative w-40 h-40 rounded-lg'>
                            <img src={album.image} className='w-full object-cover rounded-lg'/>
                            <span className='h-10 w-10 rounded-full justify-center items-center bg-green-600 text-black absolute bottom-0 right-0 hover hidden'>
                               <PlayIcon  fill='black' size={20}/> 
                            </span>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home


