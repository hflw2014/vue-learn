import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router"
import Login from "../page/login/index.vue"
import Student from "../components/Students.vue"
import School from "../components/Schools.vue"
import VendorManagement from "../components/Vendor.vue"
import TestManagement from "../components/Test.vue"
import Test2Management from "../components/Test2.vue"
import HelloWorld from '../components/HelloWorld.vue'
import Device from "../list/Device.vue"

const routes:RouteRecordRaw[] = [
    {
        path: "/login",
        component:Login,
    },
    {
        path: "/vendor",
        component:VendorManagement,
    },
    {
        path: "/test",
        component:TestManagement,
    },
    {
        path: "/test2",
        component:Test2Management,
    },
    {
        path: "/hello",
        component:HelloWorld,
    },
    {
        path: "/list",
        component:Device,
    },
];
const router = createRouter({
    routes,
    history:createWebHashHistory(),
})

export default router