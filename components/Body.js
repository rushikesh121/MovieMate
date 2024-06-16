import React, { useEffect, useState } from "react";
import KEY from "../src/utils";
import ShowData from "./ShowData";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Shim from "../components/Shim";
export default function Body() {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  async function GetData() {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=e2c44d225d453ec302d21c442b0a785d"
      );
      const da = await data.json();
      setMovie(da.results);
    } catch (error) {
      console.log(error)
    }
   
  }
  console.log(movie);
  useEffect(() => {
    GetData();
  }, []);


  
  return (
    <div className="min-w-full">
      <h1 className="text-center font-semibold text-4xl text-slate-300 uppercase">
       Discover
      </h1>
      <div className="md:flex md:gap-2 md:flex-wrap md:justify-center flex flex-wrap justify-center">
        {movie.map((data) => {
          return (
            <Link to={`/detail/${data.id}`}>
              <ShowData {...data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
