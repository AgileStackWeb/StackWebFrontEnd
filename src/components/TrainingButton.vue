<template lang="">
<div>
    <button @click="alertmsg">{{msg}}</button>
</div>
</template>

<script>
export default {
    data() {
        return{
            msg:'開始訓練'
        }
    },
    methods: {
        alertmsg() {
            console.log('Training Success.');
            alert('訓練成功');
        },
    }
}
</script>

<style lang="">

</style>
