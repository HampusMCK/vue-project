<script setup>
import { ref, computed, toValue } from 'vue';
import { creatingNew } from './NavigationBar.vue'
import { maxPrice, orderPrice } from './FilterField.vue'
import { minPrice } from './FilterField.vue'
</script>

<script>
const test = ref(500)
export const list = ref([
    { title: 'Hello', info: 'i said hello', price: 300 },
    { title: 'Yes', info: 'no', price: 1523 }
])


list.value.map((t) => {
    const val = t.price
    maxPrice.value = Math.max(maxPrice.value, val)
})

const name = ref('')
const details = ref('')
const price = ref(1)

export function orderList(){
    if (orderPrice)
        list.value.sort((a, b) => b.price - a.price)
}

function addListing() {
    // Make it start with capital letter
    let p = parseInt(price.value)
    name.value = name.value[0].toUpperCase() + name.value.slice(1)
    details.value = details.value[0].toUpperCase() + details.value.slice(1)
    list.value.push({ title: name.value, info: details.value, price: p })

    list.value.map((t) => {
    maxPrice.value = Math.max(maxPrice.value, t.price)
})

    name.value = ''
    details.value = ''
    price.value = 1
    creatingNew.value = false
}
</script>

<template>
    <div class="newListingBox">
        <form @submit.prevent="addListing">
            <h2>What is the title of your Listing:</h2>
            <input v-model="name" required placeholder="Write Title Here">
            <h2>Give some information about your Listing:</h2>
            <input v-model="details" required placeholder="Give Information Here">
            <h2>Set a price: ${{ price }}</h2>
            <input v-model="price" type="text" required placeholder="Write your price here">
            <button>Add Listing</button>
        </form>
    </div>
</template>

<style scoped>
.newListingBox{
    outline: 1px solid black;
    background-color: white;
    height: 100%;
}

.newListingBox form{
    width: 50%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 10% 10% 30% 10% 10% 20%;
    margin: 0 25%;
}

.newListingBox form h2{
    color: black;
}

.newListingBox input{
   text-align: center;
}

.newListingBox form button{
    height: 25%;
    align-self: center;
}
</style>