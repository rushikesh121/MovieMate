import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageBaseUrl } from "../src/utils";
export default function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [g, sG] = useState([]);

  async function getMovieInfo() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    const js = await data.json();
    setMovie(js);
    console.log(js);
  }
  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center relative w-100 h-[700px]">
        <img
          className="w-full h-full object-contain object-cover object-top object-center  opacity-50"
          src={`${imageBaseUrl}${movie.backdrop_path}`}
        ></img>
        <div className="absolute flex h-full w-full justify-center items-center bg-black/70 bottom-0"></div>

        <div className="w-[350px] h-[500px] absolute left-[200px] flex flex-col justify-between items-center">
          <img
            className="w-full h-full object-contain object-cover object-top  rounded-lg shadow-sm shadow-blue-200 mr-[300px]"
            src={`${imageBaseUrl}${movie.backdrop_path}`}
          ></img>
        </div>
        <div className=" absolute right-[400px] top-[100]  h-[500px] w-[750px]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-semibold">{movie.title}</h1>
            <h3 className="font-bold">
              Rating: <span className="font-sans">{movie.vote_average}</span>
            </h3>
          </div>
          <h3 className="font-semibold text-lg">Tagline</h3>
          <p className="bg-slate-300 rounded-lg px-2 font-serif inline-block mt-5 text-black py-2">
            {movie.tagline}
          </p>
          <h3 className="mt-5 font-semibold text-lg">
            Release Data: {movie.release_date}
          </h3>
          <h2 className="font-semibold text-md mt-5 ">Overview</h2>
          <p className="bg-slate-300 rounded-lg px-2 font-serif inline-block mt-5 text-black py-2 ">
            {movie.overview}
          </p>

          <p className="mt-5 font-semibold  ">Genres</p>
          <ul className="mt-3">
            {movie.genres?.map((item) => (
              <li className="inline mr-5 rounded-md bg-slate-200 text-black py-1 px-2">
                {item.name}
              </li> // Ensure each item has a unique key
            ))}
          </ul>
          <a
            href={movie.homepage}
            className="font-semibold py-1  px-4 rounded-sm bg-red-500 hover:bg-red-800 transition-all duration-200 pare"
          >
            <button className="mt-10">Visit</button>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}
