import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hook/UseGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState("shinchan")
    // const [gif, setGif] = useState(null);
    // const [loading, setLoading] = useState("false")
    
    
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
        
    // }

    // useEffect( () => {
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif();

    function clickHandler() {
        fetchData();
    }
    function changeHandler(e) {
      setTag(e.target.value)

    }

  return (
    <div className='bg-blue-500 w-1/2  rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-1.5xl underline uppercase font-bold'>  Random {tag} GIF</h1>
{
        loading ? (<spinner/>) : (<img src={gif} width="450"/>)
}   

        <input
          className='w-10/12 text-lg py-1 rounded-lg mb-[3px] text-center'
          onChange={changeHandler}
          value={tag}
        
        />


        <button onClick={clickHandler}
        className='bg-green-200 text-1xl w-10/12 rounded-lg py-1 mb-[20px]'>
            Generate
        </button>
      
    </div>
  )
}

export default Tag
