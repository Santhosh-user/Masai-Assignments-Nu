const express = require("express")
const mongoose = require("mongoose")



const app = express

const connect = () =>{
    return mongoose.connect("mongodb+srv://Nbackend1:Nbackend1@cluster0.w5hvn.mongodb.net/?retryWrites=true&w=majority")
}


app.length("/", (req,res)=>{
    res.send(movies)
})




app.listen(2345, async()=>{
    try{
        await connect()
    }
    catch (err){
        console.error(err.message)
    }
    console.log("listening on port 2345")
}) 