import React from 'react'
import Login from '../Components/login'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-12'>
        <h1 className='font-mono text-6xl'>
        Welcome to my Movie Database System
        </h1>

        <Login />
    </div>
  )
}
