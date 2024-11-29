<script setup>
    import { ref } from 'vue';
    import { Search } from './ListingItems.vue'
</script>

<script>
    export const creatingNew = ref(false)
    const isBarActive = ref(false)
    function activateMenu(){
        isBarActive.value = !isBarActive.value
    }

    const userSearch = ref('')
    function get(){
        if (userSearch.value != '')
        {userSearch.value = userSearch.value[0].toUpperCase() + userSearch.value.slice(1)}
        console.log(userSearch.value)
        Search(userSearch)
        userSearch.value = ''
    }
</script>

<template>
<div class="container">
    <div class="logo">
        <img src="./icons/Neighbour.png" alt="Website Logo" width="90px">
    </div>
    <div class="searchbar">
        <h1 class="orgName">Neighbour Help</h1>
        <form @submit.prevent="get">
            <input type="text" placeholder="&#128269; Type your search here" v-model="userSearch">
            <button class="searchbtn">&#128269; Search!</button>
        </form>
    </div>
    <div class="menu" :class="{ active: isBarActive}" @click="activateMenu">   
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <div class="dropdownMenu" :class="{ active: isBarActive}">
        <ul>
            <li @click="creatingNew = true, isBarActive = false">Create new listing</li>
            <li @click="creatingNew = false, isBarActive = false">Listings</li>
        </ul>
    </div>
</div>
</template>

<style scoped>
    .container{
        display: grid;
        grid-template-columns: 25% 50% 25%;
        background-color: red;
        padding: 15px;
    }

    .orgName {
        color: aqua;
        text-align: center;
        font-size: 35px;
        font-family: cursive;
        font-style: italic;
        text-decoration: underline;
        text-shadow: -1px -1px 0 black, 1px -1px 0 black, 1px 1px 0 black, 1px 1px 0 black;
    }

    input{
        width: 80%;
        height: 40px;
    }

    .searchbtn{
        width: 20%;
        height: 40px;
    }

    .menu {
        display: block;
        height: 65px;
        align-self: self-end;
        align-content: end;
    }

    .menu .bar{
        display: block;
        width: 12%;
        height: 10%;
        margin: 2% auto;
        background-color: black;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .menu.active .bar:nth-child(2) {
        opacity: 0;
    }
    .menu.active .bar:nth-child(1) {
        transform: translateY(13px) rotate(45deg);
    }
    .menu.active .bar:nth-child(3) {
        transform: translateY(-13px) rotate(-45deg);
    }

    .dropdownMenu {
        display: none;
        background-color: white;
        color: black;
        outline: 2px solid black;
        width: 20%;
        z-index: 777;
        position: fixed;
        left: 77%;
        top: 15%;
    }

    .dropdownMenu.active {
        display: block;
    }

    .dropdownMenu ul {
        list-style: none;
        text-decoration: underline;
    }
</style>