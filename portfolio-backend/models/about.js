import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    about:{
        type:String,
        type:Number,
    }
});


const About = mongoose.model("about",aboutSchema);
export {About};