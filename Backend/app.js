const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')

const app = express()


// middlewares
app.use(express.json())
app.use("/pdf",router)   //localhost:5000/books

mongoose.connect("mongodb+srv://sonasreedhar44:RjD8EYQSP5zn8oOc@cluster0.mdndnh7.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(()=>console.log("connected to Database"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>{
    console.log(err)
})


