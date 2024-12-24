import mongoose from "mongoose";
import express from 'express' ;
import cors from 'cors'; 
import dotenv from 'dotenv' ; 

import { Movies } from "./schemas.js";


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


app.get('/movies', async (req, res) => {
    try {
        const movies = await Movies.find(); 
        res.status(200).json(movies); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});








// ==================================================================================================================


app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`); 
})
