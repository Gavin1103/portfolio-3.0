import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyWorkView from "@/views/MyWorkView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Gavin Tjin — Full Stack Developer' },
    },
    {
      path: '/my-work',
      name: 'my work',
      component: MyWorkView,
      meta: { title: 'My Work — Gavin Tjin' },
    },
    {
      path: '/project-detail/:id',
      name: 'project-detail',
      component: ProjectDetailView,
      meta: { title: 'Project — Gavin Tjin' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: { title: '404 — Gavin Tjin' },
    },
  ],
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) ?? 'Gavin Tjin'
})

export default router
