const mongoose = require("mongoose")

const connect = () =>{
    return mongoose.connect("mongodb+srv://Nbackend11:Nbackend11@cluster0.wqjkt.mongodb.net/ecom")
}

module.exports = connect