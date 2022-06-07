const mongoose = require("mongoose")

const brandSchema = new mongoose.Schema({
    brand_name: {type: String, required: true},
    product_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    }
})

module.exports = mongoose.model("brand", brandSchema)