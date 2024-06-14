import React, { useState } from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
import ShowData from "./ShowData";  

export default function Header() {
  const [search,setSearch]=useState("");
  return (
    <div className=" text-white flex justify-between  items-center shadow-md shad shadow-black px-[40px] h-[80px] rounded-md w-ful sticky top-0 z-50 bg-opacity-80 backdrop-blur-lg ">
      <h1 className=" relative uppercase text-md font-serif opacity-80">moviemate 
      </h1>
      <ul className="flex flex-row gap-7">
        <Link to="/">
          <li className="cursor-pointer hover:text-black uppercase transition-all duration-300 font-semibold">
            Home
          </li>
        </Link>
        <Link to="/result/popular">
          <li className="cursor-pointer  hover:text-black transition-all duration-300 uppercase font-semibold">
            Popular
          </li>
        </Link>
        <Link to="/result/top_rated">
          <li className="cursor-pointer  hover:text-black transition-all duration-300 uppercase font-semibold">
            Now Playing
          </li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer  hover:text-black transition-all duration-300 uppercase font-semibold">
            About Me
          </li>
        </Link>
      </ul>
      <div className="">
        <input
          type="search"
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
          placeholder="Type Movie Name...."
          className="border-l-slate-800 border py-[12px] px-5 rounded-xl mr-1 text-black"
        ></input>
        <Link to={`/movie_detail/${search.trim()}`}>
        <button className=" border p-2 rounded-md hover:bg-blue-950 transition-all" disabled={(!search.trim())}>Search</button>

        </Link>
      </div>
    </div>
  );
}