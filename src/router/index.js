import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "../components/Pages/LandingPage.vue";
import SimiliSnap from "../components/Pages/SimiliSnap.vue";
import Contact from "../components/Pages/ContactPage.vue";
import ComingSoonPage from "../components/Pages/ComingSoonPage.vue";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/similisnap", name: "SimiliSnap", component: SimiliSnap },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/coming-soon", name: "ComingSoon", component: ComingSoonPage }
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }
    return { x: 0, y: 0, behavior: "smooth" };
  }
});

export default router;
