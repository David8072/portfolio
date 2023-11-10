import express from "express";
import { getAbout } from "../controllers/about.js";


const arouter = express.Router();

arouter.get("/about",async(req,res)=>{
    try {
        let about = await getAbout(req);
    } catch (error) {}
    
});

export const aboutRouter = arouter;