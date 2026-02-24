<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

async function submitSignup() {
  if (!username.value || !email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value
    })
  })
  const data = await response.json()
  if (data.error) {
    error.value = data.error
    return
  }
  router.push('/login')
}
</script>

<template>
  <main class="flex justify-center items-center h-[calc(100vh-64px)]">
    <div class="flex flex-col gap-4 w-80 p-8 border rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center">Sign Up</h2>
      <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>
      <input v-model="username" class="p-2 border rounded" type="text" placeholder="Username" />
      <input v-model="email" class="p-2 border rounded" type="email" placeholder="Email" />
      <input v-model="password" class="p-2 border rounded" type="password" placeholder="Password" />
      <input v-model="confirmPassword" class="p-2 border rounded" type="password" placeholder="Confirm Password" />
      <button @click="submitSignup" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create Account</button>
      <p class="text-center text-sm">Already have an account? <RouterLink to="/login" class="text-blue-500 hover:underline">Login</RouterLink></p>
    </div>
  </main>
</template>
