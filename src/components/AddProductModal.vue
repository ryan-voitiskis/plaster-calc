<script setup lang="ts">
import { reactive } from "vue"
import { productStore } from "../stores/productStore"
import { Product } from "../types/Product"
import XIcon from "./icons/XIcon.vue"

const products = productStore()

const form = reactive<Product>({
  id: products.productList[products.productList.length - 1].id + 1,
  name: "",
  supplier: "",
  price: undefined,
  pricePerSqm: undefined,
  length: 0,
  width: 0,
  thickness: 0,
})
</script>

<template>
  <div class="modal-header">
    <h2>{{ products.toEdit ? "Edit" : "Add" }} Product</h2>
    <button
      class="close"
      type="button"
      @click="products.showAddProduct = false"
    >
      <XIcon />
    </button>
  </div>
  <form @submit.prevent="products.addProduct(form)">
    <div class="modal-body">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="form.name" />
      <label for="supplier">Supplier</label>
      <input id="supplier" type="text" v-model="form.supplier" />
      <label for="length">Length</label>
      <input id="length" type="text" v-model.number="form.length" />
      <label for="width">Width</label>
      <input id="width" type="text" v-model.number="form.width" />
      <label for="thickness">Thickness</label>
      <input id="thickness" type="text" v-model.number="form.thickness" />
      <p>Either Price or Price/sqm is required, not both.</p>
      <label for="price">Price/unit</label>
      <input id="price" type="text" v-model.number="form.price" />
      <label for="price_per_sqm">Price/sqm</label>
      <input id="price_per_sqm" type="text" v-model.number="form.pricePerSqm" />
    </div>
    <div class="modal-footer">
      <button
        class="secondary"
        type="button"
        @click="products.showAddProduct = false"
      >
        Cancel
      </button>
      <button class="primary" type="submit">Add</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
