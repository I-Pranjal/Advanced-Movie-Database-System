import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full justify-evenly flex p-4 mb-10 bg-white bg-opacity-15'>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/genre'>Manage Genre</Link>
      <Link to='/usersmanagement'>Manage Users</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/watchlist'>Watchlist</Link>
    </div>
  )
}
