import mongoose from "mongoose";

const contactmeSchema = new mongoose.Schema({
    about:{
        type:String,
        type:Number,
    }
});


const Contactme = mongoose.model("contactme",contactmeSchema);
export {Contactme};