const mongoose= require("mongoose");
require ('dotenv').config()

DATABASE=process.env.MONGOURL

const connectDb= async ()=>{
    try {
        await mongoose.connect(DATABASE)
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error)
    }
}

module.exports=connectDb