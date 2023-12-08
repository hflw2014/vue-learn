
import request from "../utils/request"


export function doLogi(admin: Admin){
    return request.post("/api/admin",admin)
}