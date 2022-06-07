const express = require("express")
const { connect } = require("mongoose")

const router = express.Router()


const User = require("../models/user.model")


router.get("",async (req,res)=>{
    const user = await User.find().lean().exec()
    return res.send(user)
})

router.post("",async (req,res)=>{
    const user = await User.create(req.body)
    return res.send(user)
})

router.get("/id", async(req,res)=>{
    const user = await User.findById(req.params.id).lean().exec()
    return res.send(user)
})

router.patch("/:id",async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body).lean().exec()
    return res.send(user)
})


router.get("/:id/addresses",async(req,res)=>{
    const user = await User.find({"_id":req.params.id},{"address":1,"_id":0}).lean().exec()
    return res.send(user)
})

router.post("/:id/addresses",async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,{ $push: {"address": req.body}}).lean().exec()
    return res.send(user)
})

router.patch("/:id/addresses/:index",async(req,res)=>{
    var index = req.params.index
    const user = await User.findOneAndUpdate({"_id": req.params._id},{$set:{[`address.${index}`]: req.body}})
    return res.send(user)
})

module.exports = router