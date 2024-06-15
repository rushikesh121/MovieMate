import React from "react";
import { imageBaseUrl } from "../src/utils";
export default function ShowData({
  id,
  backdrop_path,
  title,
  poster_path,
  vote_average,
}) {
   return (
    <div className="flex flex-row mx-11 mt-11 flex-wrap group">
        <div className="w-[270px] h-[380px] rounded-xl flex cursor-pointer overflow-hidden shadow-sm shadow-slate-300 relative justify-center align-middle">
            <img className="w-full h-full  object-cover object-fill group-hover:opacity-35  opacity-80 transition-all duration-200 " src={`${imageBaseUrl}${poster_path}`}></img>

            <div className="absolute h-full w-full flex items-center justify-center  -bottom-80 group-hover:bottom-0 flex-col transition-all duration-200  ">
              <p className="uppercase items-center text-xl font-semibold mb-2">{title}</p>
              <p className="uppercase text-sm font-serif "> Rating: <span className="bg-white text-black px-1  py-1 rounded-md"> {vote_average.toFixed(1)}</span></p>
              
            </div>
        </div>
        </div>
  );
}
