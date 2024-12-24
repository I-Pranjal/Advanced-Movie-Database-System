import React, { useEffect, useState } from 'react'
import MovieTable from '../Components/MovieTable'

export default function Movies() {
  const [movies, setMovies] = useState([]); 


  useEffect(() => {
        const findMovies = async () => {
            try{
            const response = await fetch(`http://localhost:5000/movies`); 
            const data = await response.json(); 
            console.log(data); 
            setMovies(data);
            }
            catch(err){
              console.log("Error find the movies ", err); 
            } 
        }

        findMovies(); 
  },[]); 


  return (
    <div>
       <MovieTable movies={movies} />
    </div>
  )
}
