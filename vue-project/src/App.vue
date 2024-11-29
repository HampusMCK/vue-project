<script setup>
import NewListings from './components/NewListings.vue';
import ListingItems from './components/ListingItems.vue';
import NavigationBar from './components/NavigationBar.vue';
import FilterField from './components/FilterField.vue';
import { ref } from 'vue';
import { creatingNew } from './components/NavigationBar.vue'
</script>

<script>

</script>

<template>
  <div class="wrapper">
    <NavigationBar></NavigationBar>
  <main :class="{newListing: creatingNew}">
    <div class="filters">
      <FilterField></FilterField>
    </div>
    <div class="listings">
      <ListingItems></ListingItems>
    </div>
    <div class="ads">
      <h3>There Will Be Ads Here</h3>
    </div>
  </main>
  <div class="newListField" :class="{new: creatingNew}">
    <NewListings>

    </NewListings>
  </div>
</div>
</template>

<style scoped>
.wrapper{
  display: grid;
  grid-template-rows: 15% 80% 5%;
  min-height: 800px;
}

main {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  padding: 10px 0;
}

main.newListing {
  display: none;
}

.newListField {
  display: none;
}

.newListField.new{
  display: block;
}

.ads {
  background-color: white;
  margin: 0 5px;
  color: black;
  align-content: center;
  text-align: center;
}
</style>
