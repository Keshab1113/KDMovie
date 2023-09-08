import React,{useContext, useEffect, useState} from "react";

export const API = `https://www.omdbapi.com/?apikey=cc5a0666`;
const AppContext = React.createContext();



const AppProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setmovie] = useState([]);
    const [isError, setIsError] = useState({show: "false", msg:" "});
    const [query,setQuery]=useState("Titanic");
    const getMovies = async (url)=>{
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.Response === "True"){
                setIsLoading(false);
                setmovie(data.Search);
                setIsError({
                    show: false,
                    msg: "",
                });
            }
            else{
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        let timerOut = setTimeout(() => {
            getMovies(`${API}&s=${query}`);
        }, 800);
        return ()=> clearTimeout(timerOut);
    },[query]);

    return <AppContext.Provider value = {{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>;
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};