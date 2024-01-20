import mongoose, { Mongoose } from "mongoose";

export async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL)
}