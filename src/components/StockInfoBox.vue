<template lang="">
    <div>
        <box-info></box-info>
        <box-content></box-content>
<<<<<<< HEAD
=======
        
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8
    </div>
</template>

<script>
import { createApp } from 'vue';
export default {

}
<<<<<<< HEAD
const boxinfo = createApp({});

// 將元件註冊在 app 身上 
boxinfo.component('box-info', {
    template: `<div><h2>{{info}}</h2></div>`,
    data:{
        info:'股票資訊'
    },
    props: {},
    computed: {},
    methods: {
        changeinfo(mes){
            info.value = mes
        }
    }
});
// 新增一個「根實體」，並掛載於 #app 之上 
boxinfo.mount('#app');

const boxcontent = createApp({});
boxcontent.component('box-content', {
    template: `<div><h2>{{content}}</h2></div>`,
    data:{
        content:''
    },
    props: {},
    computed: {},
    methods: {
        updatecontent(mes){
            content.value = mes
        }
    }
});
boxcontent.mount('#app');
=======
// const boxinfo = createApp({});

// // 將元件註冊在 app 身上 
// boxinfo.component('box-info', {
//     template: `<div><h2>{{info}}</h2></div>`,
//     data:{
//         info:'股票資訊'
//     },
//     props: {},
//     computed: {},
//     methods: {
//         changeinfo(mes){
//             info.value = mes
//         }
//     }
// });
// // 新增一個「根實體」，並掛載於 #app 之上 
// boxinfo.mount('#app');

// const boxcontent = createApp({});
// boxcontent.component('box-content', {
//     template: `<div><h2>{{content}}</h2></div>`,
//     data:{
//         content:''
//     },
//     props: {},
//     computed: {},
//     methods: {
//         updatecontent(mes){
//             content.value = mes
//         }
//     }
// });
// boxcontent.mount('#app');
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8

</script>

<style lang=""></style>
