import {Contactme} from "../models/contactme.js";

export function getContactme(request){
    return Contactme.findOne({
        type : request.body.type,
        type : request.body.type,
    })
}