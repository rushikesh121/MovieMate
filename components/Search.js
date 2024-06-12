import React from 'react';
import { useParams } from 'react-router-dom';
export default function Search(props) {

    const {id}=useParams();
  return (
    <div>
        <h1>This is Search {id}</h1>
    </div>
  )
}
