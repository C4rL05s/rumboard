<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

async function submitLogin() {
  if (!username.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  const data = await response.json()
  if (data.error) {
    error.value = data.error
    return
  }
  localStorage.setItem('username', data.username)
  router.push('/')
}
</script>

<template>
  <main class="flex justify-center items-center h-[calc(100vh-64px)]">
    <div class="flex flex-col gap-4 w-80 p-8 border rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center">Login</h2>
      <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>
      <input v-model="username" class="p-2 border rounded" type="text" placeholder="Username" />
      <input v-model="password" class="p-2 border rounded" type="password" placeholder="Password" />
      <button @click="submitLogin" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
      <p class="text-center text-sm">Don't have an account? <RouterLink to="/signup" class="text-blue-500 hover:underline">Sign up</RouterLink></p>
    </div>
  </main>
</template>
