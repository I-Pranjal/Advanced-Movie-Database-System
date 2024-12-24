import React, { useEffect, useState } from 'react'
import WatchListTable from '../Components/WatchlistDetails.jsx';



export default function Watchlist() {
    const [list , setList ] = useState([]); 

    useEffect(() => {
      const findList = async () => {
        try {
            const response = await fetch(`http://localhost:5000/watchlist`); 
            const data = await response.json(); 
            setList(data);
        }
        catch(err){
            console.log('Error finding watchlist', err); 
        }
      }

      findList(); 

    },[]); 

  return (
    <div>
      <h1 className='font-mono text-6xl'>
              Welcome to Watchlist dashboard
              </h1>
      <WatchListTable users={list} />
    </div>
  )
}
