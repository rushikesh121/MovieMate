import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchInfo() {
  const { id } = useParams();
  
  const [mov, setMov] = useState([]);

  async function getMovieDetails() {
    const da = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e2c44d225d453ec302d21c442b0a785d&query=${id}`
    );
    const data = await da.json();
    setMov(data);
  }
  console.log(mov);
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <h1>Searching results for{id}</h1>
    </div>
  );
}
