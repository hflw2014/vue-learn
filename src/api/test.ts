import request from "../utils/request"

export function doGetAllDevices(){
    return request.get("/device/list")
}