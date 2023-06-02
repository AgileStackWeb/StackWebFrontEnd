<template>
  <!-- <div :class="['w-80 p-5', 'bg-white', 'rounded-lg']">
    <div :class="['w-full h-2', 'bg-cyan-100', 'rounded-full']">
      <div :class="['w-1/3 h-full', 'bg-violet-600', 'rounded-full']" />
    </div>
  </div> -->
  <div
    :class="[
      'w-80 p-5',
      'bg-white',
      'rounded-lg',
      'flex flex-col',
      'justify-center items-center',
      'gap-3',
    ]"
  >
    <slot
      :minVal="minVal"
      :maxVal="maxVal"
      :currentVal="currentVal"
      :percent="percent"
    />
    <div :class="['w-full h-2', 'bg-violet-600', 'rounded-full']">
      <div
        :class="[
          'w-1/3 h-full',
          'bg-cyan-100',
          'rounded-full',
          'transition-all duration-500',
        ]"
        :style="{
          width: percent + '%',
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
};
</script>
