<script setup>
import { ref, onMounted } from 'vue'
import socket from '../socket'

const posts = ref([])
const newPost = ref('')

// Load existing posts when page opens
onMounted(async () => {
  const response = await fetch('http://localhost:3000/posts')
  posts.value = await response.json()
})

// Submit a new post
function submitPost() {
  if (!newPost.value.trim()) return
  const post = {
    content: newPost.value,
    username: localStorage.getItem('username')
  }
  socket.emit('new-post', post)
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  })
  newPost.value = ''
}

// Listen for new posts from other users
socket.on('post-received', (post) => {
  posts.value.unshift(post)
})
</script>

<template>
  <main class="max-w-2xl mx-auto mt-8 px-4">
    <div class="flex flex-col gap-2 mb-8">
      <textarea
        v-model="newPost"
        class="w-full h-24 p-2 border rounded resize-none"
        placeholder="What's on your mind?"
      ></textarea>
      <button
        @click="submitPost"
        class="self-end px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >Post</button>
    </div>
    <div class="flex flex-col gap-4">
      <div v-for="post in posts" :key="post.id" class="p-4 border rounded-lg">
        <p class="font-semibold">{{ post.username }}</p>
        <p>{{ post.content }}</p>
        <p class="text-sm text-gray-500">{{ post.created_at }}</p>
      </div>
    </div>
  </main>
</template>
