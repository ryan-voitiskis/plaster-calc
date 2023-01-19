<script setup lang="ts">
import { reactive } from "vue"
import { productStore } from "../stores/productStore"
import { Product } from "../types/Product"

const products = productStore()
console.log(products.editingProduct)
console.log(products.getById(products.editingProduct!))

const form = products.editingProduct
  ? reactive<Product>(products.getById(products.editingProduct)!)
  : reactive<Product>({
      id: products.productList[products.productList.length - 1].id + 1,
      name: "",
      supplier: "",
      price: 0,
      pricePerSqm: 0,
      length: 0,
      height: 0,
      thickness: 0,
    })

function submit() {
  if (products.editingProduct) {
    products.updateProduct(form)
  } else {
    products.addProduct(form)
  }
}
</script>

<template>
  <h2>{{ products.editingProduct ? "Edit" : "Add" }} Product</h2>
  <form @submit.prevent="submit">
    <label for="thickness">
      Name
      <input v-model="form.name" />
    </label>
    <label for="supplier">
      Supplier
      <input v-model="form.supplier" />
    </label>
    <label for="thickness">
      Length
      <input v-model.number="form.length" />
    </label>
    <label for="thickness">
      Height
      <input v-model.number="form.height" />
    </label>
    <label for="thickness">
      Thickness
      <input v-model.number="form.thickness" />
    </label>
    <label for="thickness">
      Price
      <input v-model.number="form.price" />
    </label>
    <label for="thickness">
      Price/sqm
      <input v-model.number="form.pricePerSqm" />
    </label>
    <button type="submit">
      {{ products.editingProduct ? "Edit" : "Add" }}
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
