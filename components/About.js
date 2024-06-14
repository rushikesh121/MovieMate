import React from "react";
import { useState } from "react";
import { Icon } from "@heroicons/react/outline";


const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.17 6.84 9.49.5.09.68-.21.68-.47v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.32 1.08 2.88.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.563 9.563 0 0112 6.84c.85.003 1.7.115 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.56.68.47C19.13 20.17 22 16.41 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

export default function About() {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen ">
      <h1 className="uppercase font-semibold">Rushikesh Raut</h1>
      <a href="https://github.com/rushikesh121" className="text-white transition-all duration-200 hover:text-black ">
        <GitHubIcon />
      </a>
    </div>
  );
}
