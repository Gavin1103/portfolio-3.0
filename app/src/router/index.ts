import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyWorkView from "@/views/MyWorkView.vue";
import ProjectInfoComponent from "@/components/ProjectDetailView/ProjectInfoComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/my-work',
      name: 'my work',
      component: MyWorkView,
    },
    {
      path: '/project-detail',
      name: 'project-detail',
      component: ProjectInfoComponent,
    },
  ],
})

export default router
