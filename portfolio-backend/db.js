
import mongoose from "mongoose";



export function dataBaseconnection() {
    

    try {
        mongoose.createConnection(process.env.DB_URL);
        console.log("Mongodb connected");
    } catch (error) {
        console.log("Mongodb connection failed",error);
    }
};
