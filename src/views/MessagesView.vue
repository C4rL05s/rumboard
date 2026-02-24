<script setup>
</script>

<template>
  <main class="flex h-[calc(100vh-64px)]">
    <div class="w-64 border-r flex flex-col">
      <h2 class="text-lg font-bold p-4 border-b">Messages</h2>
      <ul class="flex-1 overflow-y-auto">
        <li class="p-4 hover:bg-gray-100 cursor-pointer border-b">
          <p class="font-semibold">User1</p>
          <p class="text-sm text-gray-500">Last message preview...</p>
        </li>
        <li class="p-4 hover:bg-gray-100 cursor-pointer border-b">
          <p class="font-semibold">User2</p>
          <p class="text-sm text-gray-500">Last message preview...</p>
        </li>
      </ul>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex-1 p-4 overflow-y-auto">
        <p class="text-gray-400 text-center mt-8">Select a conversation</p>
      </div>
      <div class="p-4 border-t flex gap-2">
        <input class="flex-1 p-2 border rounded" type="text" placeholder="Type a message..." />
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
      </div>
    </div>
  </main>
</template>
