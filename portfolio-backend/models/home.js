import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    home:{
        type:String,
    }
});


const Home = mongoose.model("home",homeSchema);
export {Home};