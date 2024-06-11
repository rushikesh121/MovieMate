import React, { useEffect, useState } from "react";
import KEY from "../src/utils";
import ShowData from "./ShowData";
  import { Link } from "react-router-dom";
export default function Body() {
  const [movie, setMovie] = useState([]);
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

  return(
    <div className="flex gap-5 flex-wrap">
          {movie.map((data)=>{
             
            return <Link to={`/detail/${data.id}`}>
               <ShowData {...data} />
             </Link>
          })}
    </div>
  )
}
