const express=require("express");

const router=express.Router();
const adminUsername='abhver192002'
const adminPassword='Abhayverma19'



router.post("/", (req,res)=>{
    const {username,password}=req.body
    if (username===adminUsername || password===adminPassword) {
        res.send("Admin is here")
    }
    else{
        res.statusCode(401).send("Unauthorized")
    }
})
module.exports=router