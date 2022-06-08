const mongoose = require("mongoose")

const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json())

app.use(cors())
const connect = require("./config/db")


const userController = require("./controllers/user.controller")
const productController = require("./controllers/product.controller")
const categoryController = require("./controllers/category.controller")
const brandController = require("./controllers/brand.controller")




app.use("/users",userController)
app.use("/product",productController)
app.use("/category",categoryController)
app.use("/brand",brandController)


app.listen(2345, async function (){
    await connect()
    console.log("successfully connected")
})
