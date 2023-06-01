<template>
  <div>
    <nav class="bg-white w-screen">
      <div class="max-w-7xl px-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link
              class="text-gray-500 hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
              to="/"
              >首頁</router-link
            >
            <router-link
              class="text-gray-500 hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
              to="/start"
              >開始</router-link
            >
            <router-link
              class="text-gray-500 hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
              to="/main"
              >第二頁</router-link
            >
            <router-link
              class="text-gray-500 hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
              to="/starttrain"
              >開始訓練</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="container mx-auto mt-20 p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
