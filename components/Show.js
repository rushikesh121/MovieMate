import React from "react";
import { useParams } from "react-router-dom";
import KEY from "../src/utils";
import ShowData from "./ShowData";
import Shim from "./Shim";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Show() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  async function GetData() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=e2c44d225d453ec302d21c442b0a785d`
    );
    const da = await data.json();
    setMovie(da.results);

  }
 
  useEffect(() => {
    GetData();
  }, [location]);
   if(movie.length===0) 
   <Shim/>
   else return (
    <div>
      <h1 className="text-center font-semibold text-4xl text-slate-300 uppercase">
        {id}
      </h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {movie?.map((data) => {
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
