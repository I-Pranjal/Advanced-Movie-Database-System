import React, { useContext, useEffect, useState } from 'react';
import WatchListTable from '../Components/WatchlistDetails.jsx';
import { UserContext } from '../useContext.jsx';
import {jwtDecode} from 'jwt-decode';

export default function Watchlist() {
    const { userName, setUserName, userMail, setUserMail } = useContext(UserContext); 
    const [list, setList] = useState([]); 

    useEffect(() => {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            try {
                // Decode the token to get user details
                const decodedToken = jwtDecode(token);
                const { Name, Email_ID } = decodedToken;

                // Set userName and userMail from decoded token
                setUserName(Name);
                setUserMail(Email_ID);
            } catch (err) {
                console.error('Error decoding token:', err);
            }
        }

        // Fetch the watchlist data
        const findList = async () => {
            try {
                const response = await fetch(`http://localhost:5000/watchlist?Email_ID=${userMail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch watchlist');
                }
                const data = await response.json();
                setList(data);
            } catch (err) {
                console.error('Error finding watchlist:', err);
            }
        };

        // Call findList if userMail is available
        if (userMail) {
            findList();
        }
    }, [userMail, setUserName, setUserMail]); // Add dependencies to avoid stale values

    return (
        <div>
            <div id='userDetails' className='flex justify-evenly bg-white bg-opacity-15 p-3 rounded-md font-mono'>
                <div>
                    Name: {userName}
                </div>
                <div>
                    Email ID: {userMail}
                </div>
            </div>

            <h1 className='font-mono text-6xl'>
                Welcome to Watchlist Dashboard
            </h1>
            <WatchListTable users={list} />
        </div>
    );
}
