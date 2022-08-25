import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutMeView from "../views/AboutMeView.vue";
import BlogView from "../views/BlogView.vue";
import ContactView from "../views/ContactView.vue";
import GalleryView from "../views/GalleryView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutMeView,
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogView,
        },
        {
            path: "/gallery",
            name: "gallery",
            component: GalleryView,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactView,
        },
    ],
});

export default router;
