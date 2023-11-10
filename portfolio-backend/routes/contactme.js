import express from "express";
import { getContactme } from "../controllers/contactme.js";


const crouter = express.Router();

crouter.get("/contactme",async(req,res)=>{
    try {
        let contactme = await getContactme(req);
    } catch (error) {}
    
});

export const contactmeRouter = crouter;