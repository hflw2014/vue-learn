import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router"
import Login from "../page/login/index.vue"

const routes:RouteRecordRaw[] = [
    {
        path: "/login",
        component:Login,
    },
];
const router = createRouter({
    routes,
    history:createWebHashHistory(),
})

export default router