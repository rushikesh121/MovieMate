import React, { useState } from "react";
import { Link } from "react-router-dom";
import Body from "./Body";  

export default function Header() {
  const [search,setSearch]=useState("");
  return (
    <div className="bg-gray-600 flex justify-between mx-8 items-center text-white border-t-2 shadow-sm shad shadow-red-800 px-3 h-[70px] mt-3 rounded-md">
      <h1 className=" relative uppercase text-md font-serif opacity-80">moviemate 
        <span className="absolute left-0 top-9 rounded-xl bg-white w-[200px] h-[1px]"></span>
      </h1>
      <ul className="flex flex-row gap-7">
        <Link to="/">
          <li className="cursor-pointer hover:text-black transition-all duration-300">
            Home
          </li>
        </Link>
        <Link to="/result/pupular">
          <li className="cursor-pointer  hover:text-black transition-all duration-300">
            Popular
          </li>
        </Link>
        <Link to="/result/trending">
          <li className="cursor-pointer  hover:text-black transition-all duration-300">
            Trending
          </li>
        </Link>
        <Link to="/result/action">
          <li className="cursor-pointer  hover:text-black transition-all duration-300">
            Action
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
          className="border-l-slate-800 border p-2 rounded-xl mr-1 text-black"
        ></input>
        <Link to={`/result/${search.trim()}`}>
        <button className=" border p-2 rounded-md hover:bg-blue-950 transition-all" disabled={(!search.trim())}>Search</button>

        </Link>
      </div>
    </div>
  );
}
