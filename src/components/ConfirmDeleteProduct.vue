<script setup lang="ts">
import { productStore } from "../stores/productStore"
import XIcon from "./icons/XIcon.vue"
const products = productStore()

const product = products.getById(products.toDelete!)
const name = !product
  ? "this product"
  : product.name
  ? product.name
  : `${product.height} x ${product.length}mm @ ${product.thickness}mm${
      product.supplier ? ` from ${product.supplier}` : ""
    }`
</script>

<template>
  <div class="modal-header">
    <h2>Delete product</h2>
    <button class="close" type="button" @click="products.toDelete = null">
      <XIcon />
    </button>
  </div>
  <div class="modal-body">
    <span class="question"> Are you sure you wish to delete {{ name }}? </span>
  </div>
  <div class="modal-footer-plain">
    <button class="close" type="button" @click="products.toDelete = null">
      Cancel
    </button>
    <button
      @click="products.deleteProduct"
      class="primary delete"
      type="submit"
    >
      Delete
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
