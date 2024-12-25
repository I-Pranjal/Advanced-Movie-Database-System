import React, { useContext, useEffect, useState } from 'react'
import WatchListTable from '../Components/WatchlistDetails.jsx';
import { UserContext } from '../useContext.jsx';



export default function Watchlist() {
    const {userName, userMail} = useContext(UserContext); 
    const [list , setList ] = useState([]); 

    useEffect(() => {
      const findList = async () => {
        try {
            const response = await fetch(`http://localhost:5000/watchlist?Email_ID=${userMail}`); 
            const data = await response.json(); 
            setList(data);
        }
        catch(err){
            console.log('Error finding watchlist', err); 
        }
      }

      findList(); 

    },[userMail]); 

  return (
    <div>
      <div id='userDetails' className='flex justify-evenly bg-white bg-opacity-15 p-3 rounded-md font-mono'>
      <div>
        Name : {userName}
      </div>
      <div>
        Email ID : {userMail} 
      </div>
      </div>

      <h1 className='font-mono text-6xl'>
              Welcome to Watchlist dashboard
              </h1>
      <WatchListTable users={list} />
    </div>
  )
}
