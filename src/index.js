import React from "react";
import ReactDOM from "react-dom/client";
import "../public/index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MovieInfo from "../components/MovieInfo"

import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Show from "../components/Show";
import Body from "../components/Body";
import About from "../components/About";
export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const Approuter = createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/detail/:id",
                    element:<MovieInfo/>
                },
                {
                    path:"/result/:id",
                    element:<Show/>
                },
            ]
        },
      
  ]);

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={Approuter}/>)