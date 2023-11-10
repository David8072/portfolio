import {Skills} from "../models/skills.js";

export function getSkills(request){
    return Skills.findOne({
        type : request.body.type,
    })
}