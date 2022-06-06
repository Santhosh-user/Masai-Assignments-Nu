const express = require("express")
const mongoose = require("mongoose")

const app = express()

const connect = () =>{
    return mongoose.connect("mongodb+srv://Nbackend1:Nbackend1@cluster0.w5hvn.mongodb.net/?retryWrites=true&w=majority")
}

//schema

const movieSchema = new mongoose.Schema({
    id: {type: String},
    movie_name: {type: String},
    critic_rating: {type: Number},
    year: {type: Number},
    viewer_rating: {type: Number},
})

//model

const Movie = mongoose.model("movie", movieSchema)

app.get("/movies", async (req,res)=>{
    const movies = await Movie.find().lean().exec()
    res.send(movies)
})


app.listen(2345, async ()=>{
    try{
        await connect()
        console.log("listening on port 2345")
    }
    catch (err){
        console.error(err.message)
    }
    
}) 