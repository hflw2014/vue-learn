import request from "../utils/request"

export function getAllDevices(){
    return request.get("/device/list")
}