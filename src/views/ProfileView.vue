<script setup>
</script>

<template>
  <main class="max-w-2xl mx-auto mt-8 px-4">
    <div class="flex items-center gap-6 mb-8 p-6 border rounded-lg shadow-sm">
      <div class="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
        U
      </div>
      <div>
        <h2 class="text-2xl font-bold">Username</h2>
        <p class="text-gray-500">Joined January 2026</p>
        <p class="text-gray-500">0 posts</p>
      </div>
    </div>
    <h3 class="text-xl font-bold mb-4">Posts</h3>
    <ul class="flex flex-col gap-4">
      <li class="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
        <p class="font-semibold">Post title here</p>
        <p class="text-sm text-gray-500">Posted 2 hours ago</p>
      </li>
    </ul>
  </main>
</template>
