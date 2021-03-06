const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
// app.use(express.json())
app.use(cors())

const connect = () =>{
    return mongoose.connect("mongodb+srv://Nbackend1:Nbackend1@cluster0.w5hvn.mongodb.net/movies")
}

//schema

const movieSchema = new mongoose.Schema({
    id: {type: String},
    movie_name: {type: String},
    viewer_rating: {type: Number},
    year: {type: Number},
    critic_rating: {type: Number},
    genre:{type: String},
    actor: {type: String},
})

//model

const Movie = mongoose.model("movie", movieSchema)

app.get("/movies", async (req,res)=>{


//     const page = req.query.page || 1
//     const size = req.query.size || 10 


//     // const movies = await Movie.find().sort("critic_rating").skip((page-1)*size).limit(size).lean().exec()

//    const totalPages = (await Movie.find().countDocuments())/size 

//     res.send({movies, totalPages})

    let movies 
    
  
        
    if(req.query["genre"]=="null"&&req.query["actor"]=="null"){
        movies = await Movie.find().sort({viewer_rating:+req.query["sort"]}).lean().exec()
    }
    else if(req.query["genre"]=="null"&&req.query["actor"]!="null"){
        movies = await Movie.find({actor:req.query["actor"]}).sort({viewer_rating:+req.query["sort"]}).lean().exec()
    }
    else if(req.query["genre"]!="null"&&req.query["actor"]=="null"){
        movies = await Movie.find({genre:req.query["genre"]}).sort({viewer_rating:+req.query["sort"]}).lean().exec()
    }
    else if(req.query["genre"]!="null"&&req.query["actor"]!="null"){
        movies = await Movie.find({ $and:[{ genre:req.query["genre"]},{actor:req.query["actor"]}]}).sort({viewer_rating:+req.query["sort"]}).lean().exec()
    }

  return res.status(201).send(movies)

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