const mongoose= require("mongoose");
require ('dotenv').config()

const connectDb= async ()=>{
    try {
        await mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error)
    }
}

module.exports=connectDb