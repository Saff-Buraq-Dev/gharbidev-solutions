import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "../components/Pages/LandingPage.vue";
import SimiliSnap from "../components/Pages/SimiliSnap.vue";
import Contact from "../components/Pages/ContactPage.vue";
import ComingSoonPage from "../components/Pages/ComingSoonPage.vue";
import AboutUsStartupPage from "../components/Pages/AboutUsStartupPage.vue";
import TeamPage from "../components/Pages/TeamPage.vue";
import FaqPage from "../components/Pages/FaqPage.vue";
import NotFoundPage from "../components/Pages/NotFoundPage.vue";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage.vue";
import TermsAndConditionsPage from "../components/Pages/TermsAndConditionsPage.vue";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/similisnap", name: "SimiliSnap", component: SimiliSnap },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/coming-soon", name: "ComingSoon", component: ComingSoonPage },
  { path: "/about-us-startup", name: "AboutUsStartup", component: AboutUsStartupPage },
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/faq", name: "FaqPage", component: FaqPage },
  { path: "/privacy-policy", name: "PrivacyPolicyPage", component: PrivacyPolicyPage },
  { path: "/terms-and-conditions", name: "TermsAndConditionsPage", component: TermsAndConditionsPage },

  // Catch-all 404 route
  { path: "/:catchAll(.*)", component: NotFoundPage }
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
