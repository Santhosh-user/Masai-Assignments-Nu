const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    quantity: {type: Number, required: true},
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    }
})

module.exports = mongoose.model("product", productSchema)