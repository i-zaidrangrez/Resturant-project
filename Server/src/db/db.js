import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db Connected")
    } catch (error) {
        console.log("There is an issue connecting to Database")
    }
}

export default dbConnect;