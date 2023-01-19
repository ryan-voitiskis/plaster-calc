import { defineStore } from "pinia"
import { Product } from "../types/Product"

export const productStore = defineStore("product", {
  state: () => ({
    productList: [
      {
        id: 1,
        name: "Gyprock CSR 2400 x 1200 x 10mm 2.88sqm Plasterboard RE",
        supplier: "Bunnings",
        height: 1200,
        length: 2400,
        thickness: 10,
        price: 16.64,
      },
      {
        id: 2,
        name: "Gyprock CSR 2700 x 1200 x 10mm 3.24sqm Plasterboard RE",
        supplier: "Bunnings",
        height: 1200,
        length: 2700,
        thickness: 10,
        price: 22.5,
      },
      {
        id: 3,
        name: "Gyprock CSR 3000 x 1200 x 10mm 3.60sqm Plasterboard RE",
        supplier: "Bunnings",
        height: 1200,
        length: 3000,
        thickness: 10,
        price: 23.9,
      },
      {
        id: 4,
        name: "Gyprock CSR 3600 x 1200mm 10mm 4.32sqm Plasterboard RE",
        supplier: "Bunnings",
        height: 1200,
        length: 3600,
        thickness: 10,
        price: 29.43,
      },
      {
        id: 5,
        name: "Gyprock CSR 6000 x 1200mm 10mm 7.20sqm Wall Plasterboard",
        supplier: "Bunnings",
        height: 1200,
        length: 6000,
        thickness: 10,
        price: 50.3,
      },
    ] as Product[],
    showEditProduct: false, // shows AddProductModal.vue
    editingProduct: null as number | null,
  }),
  actions: {
    addProduct(product: Product) {
      this.productList.push(product)
      this.showEditProduct = false
    },

    deleteProduct(id: number) {
      this.productList = this.productList.filter((product) => product.id !== id)
    },

    updateProduct(product: Product) {
      this.productList = this.productList.map((p) => {
        if (p.id === product.id) {
          return product
        }
        return p
      })
      this.editingProduct = null
      this.showEditProduct = false
    },
  },
  getters: {
    getById: (state) => {
      return (id: number): Product | null =>
        state.productList.find((p) => p.id === id) || null
    },
  },
})
