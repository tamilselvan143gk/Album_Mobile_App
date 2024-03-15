import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/Home.vue";
import Slidernature from "./components/SliderNature.vue";
import Sliderwild from "./components/SliderWild.vue";
import Slidergalaxy from "./components/SliderGalaxy.vue";
import Sliderocean from "./components/SliderOcean.vue";

const router = createRouter ({
    history: createWebHashHistory(),

    routes: [
        { path:'/', name:'Home', component:Home, },
        { path:'/slidernature', name:'Slidernature', component:Slidernature, },
        { path:'/sliderwild', name:'Sliderwild', component:Sliderwild, },
        { path:'/slidergalaxy', name:'Slidergalaxy', component:Slidergalaxy, },
        { path:'/sliderocean', name:'Sliderocean', component:Sliderocean, },
    ]
});

export default router