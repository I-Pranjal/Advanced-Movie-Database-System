import mongoose from "mongoose";

export const Movies = mongoose.model(
    'Movies', 
    new mongoose.Schema({
        Movie_ID : String,
        Title: String,
        Description : String,
        Genre_ID : String,
        Release_Date : String,
        Cast: String,
        Rating : String,
    })
) ;

// Defining other schemas here as well