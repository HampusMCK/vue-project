<script setup>
    import { ref } from 'vue';
</script>

<script>
    export const minPrice = ref(1)
    export const maxPrice = ref(1)

    const orderName = ref(false)
    const orderPrice = ref(false)
    const orderLatest = ref(false)

    export const orderOption = ref(0)

    
</script>

<template>
    <div class="box">
        <div class="title">
            <h1>Filters</h1>
        </div>
        <div class="filters">
        <div class="price">
            <h3>Price range: ${{ minPrice }}-${{ maxPrice }}</h3>
            <h3>Min price:</h3>
            <input v-model="minPrice" type="range" min="1" :max="maxPrice">
        </div>
        <div class="order">
            <h3>Sort after price:</h3>
            <input v-model="orderPrice" type="checkbox" @click="orderName = false, orderLatest = false, orderOption = 1">
            <h3>Sort after name:</h3>
            <input v-model="orderName" type="checkbox" @click="orderPrice = false, orderLatest = false, orderOption = 2">
            <h3>Sort after latest:</h3>
            <input v-model="orderLatest" type="checkbox" @click="orderName = false, orderPrice = false, orderOption = 3">
        </div>
    </div>
    </div>
</template>

<style scoped>
    .box {
        background-color: white;
        min-height: 620px;
        margin: 0 5px;
        color: black;
    }

    .title {
        color: black;
        outline: 2px solid black;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }
    
    .filters {
        text-align: center;
    }
    
    .order {
        display: grid;
        grid-template-columns: 50% 20%;
        width: 80%;
        text-align: left;
        margin-left: 10%;
    }
</style>