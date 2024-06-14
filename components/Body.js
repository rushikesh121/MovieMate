import React, { useEffect, useState } from "react";
import KEY from "../src/utils";
import ShowData from "./ShowData";
  import { Link } from "react-router-dom";
  import { useLocation } from "react-router-dom";
export default function Body() {
  const [movie, setMovie] = useState([]);
  const location=useLocation();
  async function GetData() {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=e2c44d225d453ec302d21c442b0a785d"
    );
    const da = await data.json();
    setMovie(da.results);

  }
  console.log(movie);
  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    // Your effect code here
    console.log('Route changed:', location.pathname);
  }, [location]);

  return(
    <div className="">
      <h1 className="text-center font-semibold text-4xl text-slate-300 ">Discover</h1>
        <div className="flex gap-2 flex-wrap justify-center">  
          {movie.map((data)=>{
             
             return <Link to={`/detail/${data.id}`}>
                <ShowData {...data} />
              </Link>
           })}</div>
    </div>
  )
}
