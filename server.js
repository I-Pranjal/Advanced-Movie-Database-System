import mongoose from "mongoose";
import express from 'express' ;
import cors from 'cors'; 
import dotenv from 'dotenv' ; 

import { Movies } from "./schemas.js";
import { Genre } from "./schemas.js";
import { Reviews } from "./schemas.js";
import { WatchList } from "./schemas.js";
import { UserDetails } from "./schemas.js";



dotenv.config(); 

const app = express() ;
const PORT = process.env.PORT || 5000 ; 

app.use(cors()); 
app.use(express.json());  

// COnnecting to MongoDB server 
mongoose
    .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/movies')
    .then(() => console.log("COnnected to Mongo DB "))
    .catch((err) => console.error("Error connecting to the server", err)) ;

// =================================================================================================================//

// --------------------------------------->>>>>>>>>>>>>>>>>>    Get requests     <<<<<<<<<<<<<<<<<<-----------------------------------------------
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movies.find(); 
        res.status(200).json(movies); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});

app.get('/genre', async (req, res) => {
    try {
        const genrelist = await Genre.find(); 
        res.status(200).json(genrelist); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch genre' });
    }
});

app.get('/reviews', async (req, res) => {
    try {
        const review = await Reviews.find(); 
        res.status(200).json(review); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

app.get('/watchlist', async (req, res) => {
    try {
        const watchlist = await WatchList.find(); 
        res.status(200).json(watchlist); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch watchlist' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const Details = await UserDetails.find(); 
        res.status(200).json(Details); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch watchlist' });
    }
});








// ==================================================================================================================


app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`); 
})
