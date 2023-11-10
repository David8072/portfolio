import express from "express";
import { getSkills } from "../controllers/skills.js";


const srouter = express.Router();

srouter.get("/skills",async(req,res)=>{
    try {
        let skills = await getSkills(req);
    } catch (error) {}
    
});

export const skillsRouter = srouter;