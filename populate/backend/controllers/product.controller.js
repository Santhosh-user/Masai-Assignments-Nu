const express = require("express")
const { connect } = require("mongoose")

const router = express.Router()


const Product = require("../models/product.model")


router.get("",async (req,res)=>{
    const product = await Product.find().lean().exec()
    return res.send(product)
})

router.post("",async (req,res)=>{
    const product = await Product.create(req.body)
    return res.send(product)
})

router.get("/:id", async(req,res)=>{
    const product = await Product.findById(req.params.id).lean().exec()
    return res.send(product)
})

router.patch("/:id",async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body).lean().exec()
    return res.send(product)
})


module.exports = router