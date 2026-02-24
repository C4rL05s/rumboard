import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import MessagesView from '../views/MessagesView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import ProfileView from '../views/ProfileView.vue'
import ThreadView from '../views/ThreadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Route for home page component
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Route for login page component
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    // Route for Sign Up page component
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    // Route for Messages page component
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView,
    },
    // Route for Notification page component
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
    },
    // Route for profile page component
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    // Route for thread page component
    {
      path: '/thread',
      name: 'thread',
      component: ThreadView
    },
  ],
})

export default router
