import {About} from "../models/about.js";

export function getAbout(request){
    return About.findOne({
        type : request.body.type,
        type : request.body.type,
    })
}