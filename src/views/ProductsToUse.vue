<script setup lang="ts">
import AddProductModal from "../components/AddProductModal.vue"
import ConfirmDeleteProduct from "../components/ConfirmDeleteProduct.vue"
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
    <button class="primary" @click="products.showAddProduct = true">
      Add Product
    </button>
  </div>

  <ModalBox
    v-if="products.showAddProduct"
    @close="products.showAddProduct = false"
    width="640px"
  >
    <AddProductModal />
  </ModalBox>

  <ModalBox
    v-if="products.toEdit !== null"
    @close="products.toEdit = null"
    width="640px"
  >
    <EditProductModal />
  </ModalBox>

  <ModalBox v-if="products.toDelete !== null" @close="products.toDelete = null">
    <ConfirmDeleteProduct />
  </ModalBox>
</template>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 1rem;
  padding: 20px 10px 200px;
}

@media (max-width: 769px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
