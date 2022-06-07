const mongoose = require("mongoose")

const connect = () =>{
    return mongoose.connect("mongodb+srv://Nbackend2:Nbackend2@cluster0.vhlph.mongodb.net/popu")
}

module.exports = connect