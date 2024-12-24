import React, { useEffect, useState } from 'react'
import GenreTable from '../Components/GenreTable.jsx'
export default function Genre() {
    const [genre , setGenre ] = useState([]); 

    useEffect(() => {
      const findGenre = async () => {
        try {
            const response = await fetch(`http://localhost:5000/genre`); 
            const data = await response.json(); 
            setGenre(data);
        }
        catch(err){
            console.log('Error finding genere', err); 
        }
      }

      findGenre(); 

    },[]); 

  return (
    <div>
      <h1 className='font-mono text-6xl'>
              Welcome to Genre
              </h1>
      <GenreTable movies={genre} />
    </div>
  )
}
