import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

const Movies = () => {
    const {movie, isLoading} = useGlobalContext();
    if(isLoading){
      return (
        <div className='bg-[#f5f5dc] dark:bg-slate-800 h-screen w-full flex flex-col justify-center items-center font-serif'>
          <div className=' text-2xl text-black dark:text-white'>Loading...</div>
        </div>
      );
    }
  return (
    <section className='grid justify-items-center bg-[#f5f5dc] dark:bg-slate-800'>
    <div className='grid grid-cols-12 w-9/12  gap-x-0 gap-y-9 justify-items-center'>
      {movie.map((curMovie)=>{
        const {imdbID,Title,Poster} = curMovie;
        const movieName = Title.substring(0,15);
        return <motion.div  initial={{ scale:0, opacity:0 }} transition={{ delay: 0.1, ease: "linear", }} whileInView={{scale:1, opacity:1}} className="col-span-4  h-[25rem] w-9/12 rounded-2xl border-2 dark:bg-slate-700 border-gray-800 hover:bg-gray-400 hover:text-clip overflow-hidden" key={imdbID}>
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <motion.div className='w-full h-full flex justify-center items-center ' whileHover={{ scale: 1.1}}>
                <div className=' grid justify-items-center'>
                    <motion.h2 className='text-black my-4 flex justify-center font-bold font-serif truncate dark:text-white'>{movieName.length>=15 ? `${movieName}...`: movieName}</motion.h2>
                    <motion.img src={Poster} alt="Image" className='h-64 w-44 rounded-2xl' />
                </div>
            </motion.div>
        </NavLink>
        </motion.div>
      })}
      </div>
    </section>
  )
}

export default Movies
