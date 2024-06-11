import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieInfo() {
    const {id}=useParams();
 const [movie,setMovie]=useState([]);



 async function getMovieInfo()
 {
    const data=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    const js=await data.json();
    console.log(js);
 }
 useEffect(()=>{
        getMovieInfo();
 },[])
  return (
    <div>
        <h1>Movie Detail {id}</h1>
    </div>
  )
}
