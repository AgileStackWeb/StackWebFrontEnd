<template>
  <nav class="w-screen" style="background-color: #7a63b7">
    <div class="max-w-7xl px-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link
            class="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
            to="/"
            >首頁</router-link
          >
          <router-link
            class="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
            to="/start"
            >開始</router-link
          >

          <router-link
            class="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
            to="/modellist"
            >模型列表</router-link
          >
          <router-link
            class="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
            to="/predict"
            >回測頁面(暫時放著)</router-link
          >

        </div>
      </div>
    </div>
  </nav>
  <div>
    <router-view></router-view>
  </div>
</template>
