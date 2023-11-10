import express from "express"
import mongoose from "mongoose";
import { dataBaseconnection } from "./db.js";
import dotenv from "dotenv";
import { homeRouter } from "./routes/home.js";
import { aboutRouter } from "./routes/about.js";
import { skillsRouter } from "./routes/skills.js";
import { contactmeRouter } from "./routes/contactme.js";

//configure env variables
dotenv.config();

const app = express();
const PORT = 3000;


//listen the server

app.listen(PORT,() => {
    console.log(`server started in localhost:${PORT}`);
});

//databaseconnection

dataBaseconnection();

//routes

app.use("/api/home",homeRouter)

app.use("/api/about",aboutRouter)

app.use("/api/skills",skillsRouter)

app.use("/api/contactme",contactmeRouter)