<script setup>
import { list } from './NewListings.vue';
import { computed, ref } from 'vue';
import { minPrice } from './FilterField.vue';
</script>

<script>
const searched = computed(() => {
    return searchedFor.value == ''
    ? false
    : true
})

const searchedFor = ref('')
const letterLength = ref(0)
const filteredList = computed(() => {
    return searched.value
    ? list.value.filter(
    (t) => t.title.slice(0, letterLength.value) 
    == searchedFor.value.slice(0, letterLength.value) && t.price >= minPrice.value)
    : list.value.filter((t) => t.price >= minPrice.value)
})

export function Search(query){
    searchedFor.value = query.value
    letterLength.value = searchedFor.value.length >= 5
    ? 5
    : searchedFor.value.length
}
</script>

<template>
    <main v-for="item in filteredList">
        <div class="top">
            <h1>{{ item.title }}</h1>
        </div>
        <div class="info">
            <h3>{{ item.info }}</h3>
        </div>
        <div class="price">
            <h3>${{ item.price }}</h3>
        </div>
    </main>
</template>

<style scoped>
main {
    outline: 2px solid red;
    background-color: white;
    align-items: center;
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;
}

.top {
    outline: 2px solid red;
    text-align: center;
    color: black;
    text-decoration: underline;
    font-family: 'Times New Roman', Times, serif;
}

.info {
    color: black;
    font-family: 'Times New Roman', Times, serif;
    outline: 2px solid red;
}

.price {
    color: black;
    font-family: 'Times New Roman', Times, serif;
}
</style>