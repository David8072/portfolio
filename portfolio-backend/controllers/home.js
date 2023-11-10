import {Home} from "../models/home.js";

export function getHome(request){
    return Home.findOne({
        type : request.body.type,
    })
}