const express = require("express")
const { connect } = require("mongoose")

const router = express.Router()


const Category = require("../models/category.model")


router.get("",async (req,res)=>{
    const category = await Category.find().lean().exec()
    return res.send(category)
})

router.post("",async (req,res)=>{
    const category = await Category.create(req.body)
    return res.send(category)
})

router.get("/:id", async(req,res)=>{
    const category = await Category.findById(req.params.id).lean().exec()
    return res.send(category)
})

router.patch("/:id",async(req,res)=>{
    const category = await Category.findByIdAndUpdate(req.params.id,req.body).lean().exec()
    return res.send(category)
})


module.exports = router