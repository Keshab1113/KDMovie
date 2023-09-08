import React,{useEffect, useState} from 'react'
import {NavLink, useParams} from "react-router-dom";
import { API } from './context';

const SingleMovie = () => {
    const {id}=useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setmovie] = useState("");
    const getMovies = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.Response === "True"){
                setIsLoading(false);
                setmovie(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        let timerOut = setTimeout(() => {
            getMovies(`${API}&i=${id}`);
        }, 800);
        return ()=> clearTimeout(timerOut);
    },[id]);

    if(isLoading){
      return (
        <div className='bg-[#f5f5f4] dark:bg-slate-800 h-screen w-full flex flex-col justify-center items-center font-serif'>
          <div className=' text-2xl text-black dark:text-white'>Loading...</div>
        </div>
      );
    }

  return (
    <div className='bg-[#dfdfd3] dark:bg-slate-800 h-screen w-full flex flex-col justify-center items-center font-serif '>
      <div className='bg-[#d4d4cd] dark:bg-slate-700 w-7/12 h-50 flex rounded-2xl'>
        <div className='bg-[#e0e0db] dark:bg-slate-700 w-1/4 flex justify-center items-center rounded-2xl'>
          <img src={movie.Poster} alt="Image" className=' h-full w-full rounded-2xl'/>
        </div>
        <div className='pl-2 w-3/4 text-black dark:text-white flex flex-col justify-center items-start'>
          <p className=' text-2xl'>{movie.Title}</p>
          <p className=' text-sm'>{movie.Plot}</p>
          <p>Type: {movie.Type}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Director: {movie.Director}</p>
          <p>Released: {movie.Released}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Country: {movie.Country}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Awards: {movie.Awards}</p>
          <p>BoxOffice: {movie.BoxOffice}</p>
          <p>DVD: {movie.DVD}</p>
          <p>Language: {movie.Language}</p>
          <p>Runtime: {movie.Runtime}</p>
        </div>
      </div>
      <NavLink className=" mt-4 border border-stone-800 dark:border-stone-100 rounded-2xl w-24 h-12 flex justify-center items-center text-black dark:text-white" to="/">Go Back</NavLink>
    </div>
  )
}

export default SingleMovie
