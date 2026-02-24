<script setup>
</script>

<template>
  <main class="max-w-2xl mx-auto mt-8 px-4">
    <h2 class="text-2xl font-bold mb-6">Notifications</h2>
    <ul class="flex flex-col gap-2">
      <li class="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
        <p><span class="font-semibold">User1</span> liked your post</p>
        <p class="text-sm text-gray-500">2 minutes ago</p>
      </li>
      <li class="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
        <p><span class="font-semibold">User2</span> replied to your post</p>
        <p class="text-sm text-gray-500">10 minutes ago</p>
      </li>
      <li class="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
        <p><span class="font-semibold">User3</span> sent you a message</p>
        <p class="text-sm text-gray-500">1 hour ago</p>
      </li>
    </ul>
  </main>
</template>
