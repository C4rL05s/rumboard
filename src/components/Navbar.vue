<script setup>
import { RouterLink, useRouter } from 'vue-router'

// To force a client to route to another page
// the login page in this case
const router = useRouter()

function logout() {
  localStorage.removeItem('username')
  router.push('/login')
}
</script>

<template>
  <!--
    RouterLink is like the anchor tag in HTML <a href=''></a>, it's a feature from Vue.js and it
    routes to the pages you say. Instead of refreshing the browser it just changes the view. More
    dynamic and clean.
  -->
  <header class="bg-green-600 text-white h-16">
    <nav class="h-full flex items-center justify-between px-4">
      <RouterLink to="/" class="text-xl font-bold hover:text-gray-300">RUMBoard</RouterLink>
      <ul class="flex gap-6 list-none">
        <li><RouterLink to="/messages" class="hover:text-gray-300">Messages</RouterLink></li>
        <li><RouterLink to="/notifications" class="hover:text-gray-300">Notifications</RouterLink></li>
        <li><RouterLink to="/profile" class="hover:text-gray-300">Account</RouterLink></li>
        <li><button @click="logout" class="hover:text-red-400">Logout</button></li>
      </ul>
    </nav>
  </header>
</template>
