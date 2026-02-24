<script setup>
</script>

<template>
  <main class="max-w-2xl mx-auto mt-8 px-4">
    <!-- Original post -->
    <div class="p-6 border rounded-lg shadow-sm mb-6">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
          U
        </div>
        <div>
          <p class="font-semibold">Username</p>
          <p class="text-xs text-gray-500">Posted 2 hours ago</p>
        </div>
      </div>
      <p>This is the full post content. Users can write anything here and others can reply below.</p>
      <div class="flex gap-4 mt-4 text-sm text-gray-500">
        <span class="cursor-pointer hover:text-blue-500">👍 Like</span>
        <span class="cursor-pointer hover:text-red-500">👎 Dislike</span>
      </div>
    </div>
    <!-- Replies -->
    <h3 class="text-lg font-bold mb-4">Replies</h3>
    <ul class="flex flex-col gap-4 mb-6">
      <li class="p-4 border rounded-lg">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-white">
            U
          </div>
          <p class="font-semibold text-sm">User2</p>
          <p class="text-xs text-gray-500">1 hour ago</p>
        </div>
        <p class="text-sm">This is a reply to the post.</p>
      </li>
    </ul>
    <!-- Reply box -->
    <div class="flex flex-col gap-2">
      <textarea class="w-full h-24 p-2 border rounded resize-none" placeholder="Write a reply..."></textarea>
      <button class="self-end px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Reply</button>
    </div>
  </main>
</template>
