<script setup lang="ts">
import EditProductModal from "../components/EditProductModal.vue"
import ModalBox from "../components/ModalBox.vue"
import ProductAvailable from "../components/ProductAvailable.vue"
import { productStore } from "../stores/productStore"

const products = productStore()
</script>

<template>
  <div class="products">
    <ProductAvailable
      v-for="product in products.productList"
      :product="product"
    />
    <button @click="products.showEditProduct = true">Add Product</button>
  </div>

  <ModalBox
    v-if="products.showEditProduct"
    @close="products.showEditProduct = false"
    width="640px"
  >
    <EditProductModal />
  </ModalBox>
</template>

<style lang="scss" scoped></style>
