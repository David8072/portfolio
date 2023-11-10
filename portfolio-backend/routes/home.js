import express from "express";
import { getHome } from "../controllers/home.js";


const hrouter = express.Router();

hrouter.get("/home",async(req,res)=>{
    try {
        let home = await getHome(req);
    } catch (error) {}
    
});

export const homeRouter = hrouter;