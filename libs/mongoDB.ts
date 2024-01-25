import mongoose from "mongoose";

const connectMongoDB = async () => {
    const connectionURL = process.env.MONGO_URI as string
    try {
        await mongoose.connect(connectionURL)
        console.log("Successfully Connected to Database")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB