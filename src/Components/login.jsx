import React from 'react'
import { useState, useEffect, useContext } from 'react';
import {Link,  useNavigate } from 'react-router-dom';
import {UserContext} from '../useContext'


export default function Login() {
  const { userName, setUserName, userMail, setUserMail } = useContext(UserContext);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);



    const handleSubmit = async () => {
            // Error check
            if (name.trim() === '' || password.trim() === '') {
                setError('Both fields are required');
                return;
            }

            console.log({name, password}); 

            try {
              const response = await fetch('http://localhost:5000/login', { // Added 'http://'
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name, password }),
              });
          
              if (response.ok) {
                  alert("Login successful");
                  const data =await  response.json();
                  setUserName(data.Name); 
                  setUserMail(data.Email_ID); 
                  navigate('/watchlist'); 
              } else {
                  console.log("Login failed:", response);
              }
          } catch (err) {
              console.error("Error in logging in:", err);
          }
          
    }


  return (
    <div>
       <div className="bg-white  bg-opacity-20 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-semibold text-center text-white  mb-6">Login</h1>

        {/* Name Field */}
        <div className="mb-4">
          <input
            placeholder="Enter name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center mb-6">
          <input
            placeholder="Enter password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="ml-2 text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white p-3 rounded-lg transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-red-600 text-center">{error}</p>
        )}

        {/* Redirect Link */}
        <div className="mt-6 text-center">
          <h3 className="text-lg text-white">Don't have an account?</h3>
          <Link to="/signup" className="text-green-600 hover:underline">Create account</Link>
        </div>
      </div>

    </div>
  )
}
