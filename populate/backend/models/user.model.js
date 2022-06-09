const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    first_name: {type:String, required:true},
    address: [{address1: {type: String, required: true},
            address2: {type: String, required: true}}]
})

module.exports = mongoose.model ("user", userSchema)