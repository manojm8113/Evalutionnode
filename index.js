const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const userRouter=require('./Router/userRouter')
mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log("database is not connected");
})
app.use(express.json())
app.use("/datas",userRouter)
app.listen(5000,()=>{
    console.log("port is connected");
})
