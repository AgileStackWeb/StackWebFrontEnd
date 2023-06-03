<template>
<div class="p-4">
    <table class="min-w-full bg-white border border-gray-300">
        <thead>
            <tr>
                <th class="py-2 px-4 border-b" style="background-color: #e9e4f8; color: #8d7fb1">按鈕</th>
                <th v-for="column in columns" :key="column.id" class="py-2 px-4 border-b" style="background-color: #e9e4f8; color: #8d7fb1">{{ column.label }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-100">
                <td :key="row.btn" class="py-2 px-4 border-b" style="color: #5a4888">
                    <router-link class="text-purple hover:text-blue px-3 py-2 rounded-md text-sm font-medium" to="/predict">
                        <font-awesome-icon @click="usemodel" class="icon" :icon="['fas', 'magnifying-glass']" />
                    </router-link>
                </td>
                <td v-for="column in columns" :key="column.id" class="py-2 px-4 border-b" style="color: #5a4888">{{ row[column.field] }}</td>
            </tr>
        </tbody>
    </table>
    <TrainingButton></TrainingButton>
</div>
</template>

<script setup>
import TrainingButton from "../components/TrainingButton.vue";
import {
    ref
} from "vue";

function usemodel() {
    // alert('usemodel.')
    alert('usemodel.')
    return data
}
const columns = ref([

    {
        id: 1,
        label: '模型編號',
        field: 'id'
    },
    {
        id: 2,
        label: '模型名稱',
        field: 'name'
    },
    {
        id: 3,
        label: '時間區間',
        field: 'time'
    },
    {
        id: 4,
        label: '技術指標',
        field: 'tech'
    }
])
const rows = ref([{
        id: 0,
        name: 'Model One',
        time: '2023-04-01 ~ 2023-04-02',
        tech: 'Standard'
    },
    {
        id: 1,
        name: 'Model Two',
        time: '2023-05-01 ~ 2023-05-02',
        tech: 'Standard'
    }
])
</script>

<style>
/* 添加Tailwind CSS的類名或自定義樣式 */
</style>
