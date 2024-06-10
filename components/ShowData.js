import React from "react";

export default function ShowData({
  id,
  poster_path,
  title,
  backdrop_path,
  genre_ids,
  original_language,
  vote_average,
}=d) {
  return <div className="flex flex-col ">
        <h1>id</h1>
        <h1>backdrop_path</h1>
        <h1>title</h1>
        <h1>genre_ids</h1>
        <h1>vote_average</h1>
  </div>;
}
