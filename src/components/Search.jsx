import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context'
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const Search = () => {
  const {query,setQuery,isError}=useGlobalContext();
  const [theme, setTheme] = useState(localStorage.getItem("mode"));

  useEffect(()=>{
    if(theme==="light"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);
  

  const handelThemeSwitch = ()=>{
    if(theme=="dark"){
      setTheme("light");
      localStorage.setItem("mode","light");
    }
    else{
      setTheme("dark");
      localStorage.setItem("mode","dark");
    }
  }

  return (
    <div className='h-44 w-full grid items-center justify-items-center bg-[#f5f5dc] dark:bg-slate-800'>
    <div className="absolute top-2 cursor-pointer right-2 rounded-full bg-black dark:bg-white text-red-50 ml-auto w-12 h-12 grid items-center justify-items-center text-2xl dark:text-black"><button onClick={handelThemeSwitch}>{theme==="dark"?<BsFillMoonFill/>:<BsFillBrightnessHighFill/>}</button></div>
      <form action="#" onSubmit={(e)=> e.preventDefault()}>
        <div className=' grid items-center justify-items-center'>
        <h2 className='text-3xl font-semibold font-serif dark:text-white'>Search Your Favourite Movie Here</h2>
          <input type="text" placeholder='Search Your Favourite Movie Here' className='mt-6 outline-none border-solid border-2 border-gray-500 w-72 h-10 rounded-2xl pl-5' value={query} onChange={(e)=> setQuery(e.target.value)}/>
        </div>
      </form>
      <div className=''>
        <p className='text-2xl text-black dark:text-red-50'>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}

export default Search
