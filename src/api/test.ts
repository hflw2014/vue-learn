import request from "../utils/request"

export function doGetAllDevices(){
    return request.get("/device/list")
}

export function doGetAllVendors(){
    return request.get("/vendor/list")
}

