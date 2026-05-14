<script setup>
import { ref, onMounted } from 'vue'
import socket from '../socket'

const likes = ref([])

onMounted(async () => {
  socket.on('like-notif', (liker) => {
    likes.value.unshift(liker)
  })
})


</script>

<template>
  <main class="max-w-2xl mx-auto mt-8 px-4">
    <h2 class="text-2xl font-bold mb-6">Notifications</h2>
    <div>
      <ul class="flex flex-col gap-2">
        <li v-for="like in likes" :key="index" class="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
          <p><span class="font-semibold">{{  like  }}</span>liked your post</p>
        </li>
      </ul>
    </div>
    
  </main>
</template>
