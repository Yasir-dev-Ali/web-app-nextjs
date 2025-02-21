
import mongoose from "mongoose";
import  dotenv from "dotenv";
dotenv.config();

export  const db = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;
        connection.on("connection",()=>{
            console.log("Database connected successfully");
        });
        connection.on("error",(err)=>{
            console.log("Database connection failed",err);
        });

        

        
    } catch (error) {
        console.log("Database connection failed");
    }
}
