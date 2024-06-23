import mongoose from 'mongoose'

const connectToMongo = async()=>{
    await mongoose.connect("mongodb+srv://naithanishreya7409:shivali@cluster0.kzwlv9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Database is connected successfully");
    }).catch((err)=>{
        console.log(err);
        console.log("Database is disconnected");
    })
}

export default connectToMongo;