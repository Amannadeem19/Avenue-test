import mongoose from "mongoose";

const ConnectDB = (url)=>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default ConnectDB;