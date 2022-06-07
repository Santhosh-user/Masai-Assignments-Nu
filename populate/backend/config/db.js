const mongoose = require("mongoose")

const connect = () =>{
    return mongoose.connect("mongodb+srv://Nbackend2:<password>@cluster0.vhlph.mongodb.net/popu")
}

module.exports = connect