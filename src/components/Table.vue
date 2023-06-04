<template>
  <div>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column"
            class="py-2 px-4 border-b"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-100">
          <td
            v-for="column in columns"
            :key="column"
            class="py-2 px-4 border-b"
          >
            {{ row[column] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>