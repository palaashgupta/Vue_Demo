import { createRouter,createWebHistory } from "vue-router";
import HomePage from "@/components/Home/HomePage.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import Login from "@/components/Authentication/Login.vue";
import NoAccess from "@/components/Layout/NoAccess.vue";

function isAdmin(){
    const isAdmin =true;
        if (isAdmin){
            return true;
        }
        return {name: "noaccess"};
}

function isAuthenticated(){
    const isAuthenticated =true;
    if (isAuthenticated){
        return true;
    }
    return {name:"login"}
}

const router = createRouter({
    history: createWebHistory(import.meta.env.Base_URL),
    routes:[
        {path:"/",component:HomePage, name:"Home"},
        {path:"/contact-us",component:Contact, name:"contact"},
        {path:'/contact',redirect:{name:'contact'}},
        {path:"/productList",component:ProductList, name: "Product-list", 
            beforeEnter:[isAdmin,isAuthenticated]
        },
        {path: "/product/:productId", component:ProductDetail, name:"Product-Detail", props:true},
        {path:"/login", component:Login,name:"login"},
        {path:"/product",component:ProductDetail},
        {path:"/noaccess", component:NoAccess, name:"noaccess"},
        {path:"/:catchAll(.*)",component:NotFound},
        
    ],
    linkActiveClass:"active btn btn-secondary",
});


export default router;