<script setup>
import { ref, onMounted } from 'vue'
import socket from '../socket'

const likes = ref([])
const API_URL = import.meta.env.VITE_API_URL
const username = localStorage.getItem('username')

onMounted(async () => {
  socket.on('like-notif', (liker) => {
    console.log('Notification received:', liker)
    likes.value.unshift(liker)
  })

  const pastLikes = await fetch(`${API_URL}/likes?username=${username}`)
  likes.value = await pastLikes.json()
})


</script>

<template>
  <main class="max-w-2xl mx-auto mt-8 px-4">
    <h2 class="text-2xl font-bold mb-6">Notifications</h2>
    <div>
      <ul class="flex flex-col gap-2">
        <li v-for="(like, index) in likes" :key="index" class="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
          <p><span class="font-semibold">{{  like  }}</span> liked your post</p>
        </li>
      </ul>
    </div>
    
  </main>
</template>
