const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    first_name: {type:String, required:true},
    address: [{street: {type: String, required: true},
            area: {type: String, required: true}}]
})

module.exports = mongoose.model ("user", userSchema)