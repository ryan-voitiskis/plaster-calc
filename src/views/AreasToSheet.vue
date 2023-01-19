<script setup lang="ts">
import { areaStore } from "../stores/areaStore"
import AreaToSheet from "../components/AreaToSheet.vue"
import { onMounted } from "vue"

const areas = areaStore()
</script>

<template>
  <div class="areas">
    <AreaToSheet v-for="area in areas.areaList" :area="area" />
    <button class="primary" @click="areas.addArea">Add Area</button>
  </div>
</template>

<style lang="scss" scoped>
.areas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 1rem;
  padding: 20px 10px 200px;
}

@media (max-width: 769px) {
  .areas {
    grid-template-columns: 1fr;
  }
}
</style>
