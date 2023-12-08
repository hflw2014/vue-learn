import { message } from "ant-design-vue";
import axios from "axios"

const request = axios.create({
    timeout:1000,
});
request.interceptors.request.use((c) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        c.headers = {
            token,
        };
    }
    return c;
});
request.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (e) => {
        message.error(e.response.data.message);
        return Promise.reject(e.response.data.message);
    }

)

export default request