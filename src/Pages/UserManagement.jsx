import React, { useEffect, useState } from 'react'
import GenreTable from '../Components/GenreTable.jsx'
import UserDetailsTable from '../Components/userDetail.jsx';



export default function UserManagement() {
    const [details , setDetails ] = useState([]); 

    useEffect(() => {
      const findUsers = async () => {
        try {
            const response = await fetch(`http://localhost:5000/users`); 
            const data = await response.json(); 
            setDetails(data);
        }
        catch(err){
            console.log('Error finding users', err); 
        }
      }

      findUsers(); 

    },[]); 

  return (
    <div>
      <h1 className='font-mono text-6xl'>
              Welcome to User Management Table 
              </h1>
      <UserDetailsTable users={details} />
    </div>
  )
}
