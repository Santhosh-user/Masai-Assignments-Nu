const express = require("express")
const { connect } = require("mongoose")

const router = express.Router()


const Brand = require("../models/brand.model")


router.get("",async (req,res)=>{
    const brand = await Brand.find().lean().exec()
    return res.send(brand)
})

router.post("",async (req,res)=>{
    const brand = await Brand.create(req.body)
    return res.send(brand)
})

router.get("/:id", async(req,res)=>{
    const brand = await Brand.findById(req.params.id).lean().exec()
    return res.send(brand)
})

router.patch("/:id",async(req,res)=>{
    const brand = await Brand.findByIdAndUpdate(req.params.id,req.body).lean().exec()
    return res.send(brand)
})


module.exports = router