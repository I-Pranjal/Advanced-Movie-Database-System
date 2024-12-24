import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Movies from './Pages/Movies';
import Dashboard from './Pages/Dashboard'; 
import Genre from './Pages/ManageGenre' ;
import Users from './Pages/UserManagement';
import Profile from './Pages/UserProfile'; 
import Watchlist from './Pages/Watchlist';



function App() {  

  return (
    <>

    <Router>
        <Navbar />  
      <Routes>
        <Route path='/' element={
          <>
              <h1 className='font-mono text-6xl'>
              Welcome to my Movie Database System
              </h1>
          </>
        } />
       <Route path='/movies' element={<Movies />} />
       <Route path='/dashboard' element={<Dashboard />} />
       <Route path='/genre' element={<Genre />} />
       <Route path='/usersmanagement' element={<Users />} />
       <Route path='/profile' element={<Profile />} />
       <Route path='/watchlist' element={<Watchlist />} />



      </Routes>
    </Router>
    </>
  )
}

export default App
