import React, { useEffect, useState } from "react";
import Axios from "axios";

function DataFetch() {
  const [myData, setMyData]=useState([]);
  useEffect(() => {
    Axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8").then((res)=>{
      setMyData(res.data.results);
      console.log(res.data.results)
    })
  }, [])
  
  return (
    <>
    <div className=" bg-slate-950">
      <h1 className="text-4xl text-blue-500 bg-slate-600">All Data</h1>
      {myData.map((post)=>{
        const {id,backdrop_path,original_title, overview} = post;
        return <div className="card" key={id}>
        {/* <img src={backdrop_path} alt="images" srcset="" /> */}
        <h2 className="text-blue-100">{original_title}</h2>
        <p className="text-blue-100">{overview}</p>
        </div>
      })}
    </div>
    </>
  );
}

export default DataFetch;
