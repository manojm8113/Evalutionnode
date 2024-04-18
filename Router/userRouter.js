const router=require('express').Router()
const user=require('../model/userSchema')
router.post('/posting',async(req,res)=>{
    try{
        const newUser=new user(req.body)
        const data=await newUser.save()
        res.status(200).json("the datas is added successfully")
    }catch(err){
        res.status(500).json("the data is not added")
    }
})
router.get('/getdata/:id',async(req,res)=>{
    try{
        const data=await user.find()
        console.log("the users datas are",data);
        res.status(200).json(data)
    }catch(err){
        res.status(500).json("failed")
    }
})
router.delete('/delete',async(req,res)=>{
    try{
        const data=await user.findOneAndDelete(req.body.Email)
        console.log("the deleted data is",data);
        res.status(200).json(data)
    }catch(err){
        res.status(500).json("failed")
    }
})
router.put('/update',async(req,res)=>{
    try{
        const data=await user.findOneAndUpdate(req.body.Email,{
            $set:req.body
        },{new:true})
        console.log("the updated data is",data);
        res.status(200).json(data)
    }catch(err){
        res.status(500).json("failed")
    }
})


module.exports=router