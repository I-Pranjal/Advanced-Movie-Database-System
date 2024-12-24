import mongoose, { mongo } from "mongoose";

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

// Defining Genre
export const Genre = mongoose.model(
  'Genre', 
  new mongoose.Schema({
    Genre_ID : String, 
    Name : String, 
    Description : String,   
  })
);

// Defining Reviews 
export const Reviews = mongoose.model(
    'Reviews', 
    new mongoose.Schema({
        Review_ID : String ,
        MovieID : String, 
        userID : String, 
        Rating : String, 
        ReviewTEXT : String, 
    })
); 

// Defining WatchList 
export const WatchList = mongoose.model(
    'Watchlist', 
    new mongoose.Schema({
        User_ID : String, 
        Movie_ID : String, 
        Email_ID : String, 
        Added_at : String,
    })
); 


// Defineing users details 
export const UserDetails = mongoose.model(
    'UserDetails', 
    {
        User_ID : String,
        Name : String, 
        Email_ID : String, 
        password : String , 
    }
); 