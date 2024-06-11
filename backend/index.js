const express = require('express');
const dotenv = require('dotenv');
const cors=require('cors')
const bodyParser=require('body-parser')
const connectDB = require('./db');
const router  = require('./routes/indexRoutes.js');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

app.get("/",(req,res)=>{
    try {
        res.send("Heloooo")
    } catch (error) {
        console.log(error)
    }
})
app.use("/api",router)
connectDB();
app.use((req,res,next)=>{
    req.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Origin","*")
    next()
 })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
