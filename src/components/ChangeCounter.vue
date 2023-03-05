<template>
    <!--
    <button @click="increment"> Add 1</button>
    <button @click="increase({value: 10})"> Add 10</button>
    -->
    <button @click="inc"> Add 1</button>
    <button @click="inr({value: 10})"> Add 10</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
    methods: {
        /*addOne() {
           // this.$store.commit('increase', { value: 10 });
           this.$store.dispatch({
            type: 'increase',
            value: 10
           })
        } */

        //...mapActions(['increment', 'increase'])
        ...mapActions({ 
            inc: 'numbers/increment',
            inr: 'numbers/increase'
        })

    }
}
</script>