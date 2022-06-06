const express = require("express")
const mongoose = require("mongoose")

const connect = require("./configs/db")

const app = express




app.listen(2345, async()=>{
    try{
        await connect()
    }
    catch (err){
        console.error(err.message)
    }
    console.log("listening on port 2345")
})