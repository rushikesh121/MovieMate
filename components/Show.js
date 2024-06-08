import React from 'react'
import { useParams } from 'react-router-dom'
export default function Show() {
    const {id}=useParams();
  return (
    <div>
        <h1>This is show page {id}</h1>
    </div>
  )
}
