<script setup lang="ts">
import { defineProps, computed } from "vue"
import { Product } from "../types/Product"
import { productStore } from "../stores/productStore"

const products = productStore()

const props = defineProps<{
  product: Product
}>()

function formatPrice(price: number) {
  return Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(price)
}

const formattedPrice = computed(() =>
  props.product.price
    ? formatPrice(props.product.price)
    : props.product.pricePerSqm
    ? formatPrice(
        (props.product.pricePerSqm *
          props.product.length *
          props.product.width) /
          1000000
      )
    : "N/A"
)

const formattedPricePerSqm = computed(() =>
  props.product.pricePerSqm
    ? formatPrice(props.product.pricePerSqm)
    : props.product.price
    ? formatPrice(
        props.product.price /
          ((props.product.width * props.product.length) / 1000000)
      )
    : "N/A"
)

const name = computed(() =>
  props.product.name
    ? props.product.name
    : `${props.product.width} × ${props.product.length}`
)
</script>

<template>
  <div class="product">
    <h2>{{ name }}</h2>
    <span>Supplier: {{ props.product.supplier }}</span>
    <span>Thickness: {{ props.product.thickness }}mm</span>
    <span>Size: {{ props.product.width }} × {{ props.product.length }}mm</span>
    <span
      >Area:
      {{ (props.product.width * props.product.length) / 1000000 }}m²</span
    >
    <span>Price {{ formattedPrice }}</span>
    <span>Price/sqm: {{ formattedPricePerSqm }}</span>
    <div class="controls">
      <button @click="products.toEdit = props.product.id">Edit</button>
      <button class="delete" @click="products.toDelete = props.product.id">
        Delete
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.14);
}

.controls {
  display: flex;
  gap: 0.5rem;
}
</style>
