import React from 'react'
import { useParams } from 'react-router-dom';
export default function About() {
  const {id}=useParams();
  return (
    <div>
      <h1>About US Page {id}</h1>
    </div>
  )
}
