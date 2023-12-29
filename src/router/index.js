import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "../components/Pages/LandingPage.vue";
import SimiliSnap from "../components/Pages/SimiliSnap.vue";
import Contact from "../components/Pages/ContactPage.vue";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/similisnap", name: "SimiliSnap", component: SimiliSnap },
  { path: "/contact", name: "Contact", component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  }
});

export default router;
