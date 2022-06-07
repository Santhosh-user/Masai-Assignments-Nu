const mongoose = require("mongoose")

const express = require("express")

const app = express()

app.use(express.json())

const connect = require("./config/db")


const userController = require("./controllers/user.controller")




app.use("/users",userController)


app.listen(2345, async function (){
    await connect()
    console.log("sucessfully connected")
})
