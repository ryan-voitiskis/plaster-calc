<script setup lang="ts">
import { defineProps, computed } from "vue"
import { Area } from "../types/Area"
import { areaStore } from "../stores/areaStore"

const areas = areaStore()

const props = defineProps<{
  area: Area
}>()

const nameFormatted = computed(() =>
  props.area.room
    ? `${props.area.room} - ${props.area.letter}`
    : props.area.letter
)

const aspectRatio = computed(() => props.area.length / props.area.height)
</script>

<template>
  <div class="area-wrapper">
    <div class="area">
      <h2>{{ nameFormatted }}</h2>
      <span class="height">{{ props.area.height }}</span>
      <span class="length">{{ props.area.length }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.area-wrapper {
  .area {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    padding: 10px;
    width: 100%;
    padding-bottom: calc(100% / v-bind(aspectRatio));
    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .height,
    .length {
      position: absolute;
      font-size: 1.2rem;
    }

    .height {
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    .length {
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
