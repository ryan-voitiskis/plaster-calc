<script setup lang="ts">
import { productStore } from "../stores/productStore"
import { Product } from "../types/Product"
import XIcon from "./icons/XIcon.vue"

const products = productStore()
const form: Product = { ...products.getById(products.toEdit!)! }
</script>

<template>
  <div class="modal-header">
    <h2>{{ products.toEdit ? "Edit" : "Add" }} Product</h2>
    <button class="close" type="button" @click="products.toEdit = null">
      <XIcon />
    </button>
  </div>
  <form @submit.prevent="products.updateProduct(form)">
    <div class="modal-body">
      <label for="thickness"> Name</label>
      <input type="text" v-model="form.name" />
      <label for="supplier"> Supplier</label>
      <input type="text" v-model="form.supplier" />
      <label for="thickness"> Length</label>
      <input type="text" v-model.number="form.length" />
      <label for="thickness"> Height</label>
      <input type="text" v-model.number="form.width" />
      <label for="thickness"> Thickness</label>
      <input type="text" v-model.number="form.thickness" />
      <p>Either Price or Price/sqm is required, not both.</p>
      <label for="thickness"> Price</label>
      <input type="text" v-model.number="form.price" />
      <label for="thickness"> Price/sqm</label>
      <input type="text" v-model.number="form.pricePerSqm" />
    </div>
    <div class="modal-footer">
      <button class="secondary" type="button" @click="products.toEdit = null">
        Cancel
      </button>
      <button class="primary edit" type="submit">Save</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
