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
          props.product.height) /
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
          ((props.product.height * props.product.length) / 1000000)
      )
    : "N/A"
)

const name = computed(() =>
  props.product.name
    ? props.product.name
    : `${props.product.height} × ${props.product.length}`
)

function editProduct() {
  products.editingProduct = props.product.id
  products.showEditProduct = true
}

function deleteProduct() {
  products.deleteProduct(props.product.id)
}
</script>

<template>
  <div class="product">
    <h2>{{ name }}</h2>
    <span>Supplier: {{ props.product.supplier }}</span>
    <span>Thickness: {{ props.product.thickness }}mm</span>
    <span>Size: {{ props.product.height }} × {{ props.product.length }}mm</span>
    <span
      >Area:
      {{ (props.product.height * props.product.length) / 1000000 }}m²</span
    >
    <span>Price {{ formattedPrice }}</span>
    <span>Price/sqm: {{ formattedPricePerSqm }}</span>
    <button @click="editProduct">Edit</button>
    <button @click="deleteProduct">Delete</button>
  </div>
</template>

<style lang="scss" scoped></style>
