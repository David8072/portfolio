import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
    skills:{
        type:String,
    }
});


const Skills = mongoose.model("skills",skillsSchema);
export {Skills};