<template lang="">
    <div>
        <box-info></box-info>
        <box-content></box-content>
        <box-info></box-info>
        <box-content></box-content>
        <box-info></box-info>
        <box-content></box-content>
        <button></button>
    </div>
</template>

<script>
export default {
    
}
const boxinfo = Vue.createApp({});

// 將元件註冊在 app 身上 
boxinfo.component('box-info', {
    template: `<div><h2>{{info}}</h2></div>`,
    data() {},
    props: {},
    computed: {},
    methods: {}
});
// 新增一個「根實體」，並掛載於 #app 之上 
boxinfo.mount('#app');

const boxcontent = Vue.createApp({});
boxcontent.component('box-content', {
    template: `<div><h2>{{content}}</h2></div>`,
    data() {},
    props: {},
    computed: {},
    methods: {}
});
boxcontent.mount('#app');

const button = Vue.createApp({});
button.component('button-next', {
    template: `<button @click="searchdata">{{}}</button>`,
    data() {},
    props: {},
    computed: {},
    methods: {
        searchdata: function () {
            //查詢得到searchResult 
            return searchResult 
        }
    }
});
button.mount('#app');
</script>

<style lang=""></style>
