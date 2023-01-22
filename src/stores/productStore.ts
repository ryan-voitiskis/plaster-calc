import { defineStore } from "pinia"
import { Product } from "../types/Product"

export const productStore = defineStore("product", {
  state: () => ({
    productList: [
      {
        id: 1,
        name: "Gyprock CSR 2400 x 1200 x 10mm 2.88sqm Plasterboard RE",
        supplier: "Bunnings",
        width: 1200,
        length: 2400,
        thickness: 10,
        price: 16.64,
      },
      {
        id: 2,
        name: "Gyprock CSR 2700 x 1200 x 10mm 3.24sqm Plasterboard RE",
        supplier: "Bunnings",
        width: 1200,
        length: 2700,
        thickness: 10,
        price: 22.5,
      },
      {
        id: 3,
        name: "Gyprock CSR 3000 x 1200 x 10mm 3.60sqm Plasterboard RE",
        supplier: "Bunnings",
        width: 1200,
        length: 3000,
        thickness: 10,
        price: 23.9,
      },
      {
        id: 4,
        name: "Gyprock CSR 3600 x 1200mm 10mm 4.32sqm Plasterboard RE",
        supplier: "Bunnings",
        width: 1200,
        length: 3600,
        thickness: 10,
        price: 29.43,
      },
      {
        id: 5,
        name: "Gyprock CSR 6000 x 1200mm 10mm 7.20sqm Wall Plasterboard",
        supplier: "Bunnings",
        width: 1200,
        length: 6000,
        thickness: 10,
        price: 50.3,
      },
    ] as Product[],
    sortedProductWidths: [] as number[], // calc once when generating todo*
    showAddProduct: false, // shows AddProductModal.vue
    toEdit: null as number | null,
    toDelete: null as number | null, // shows ConfirmDeleteProduct.vue when not null
  }),
  actions: {
    addProduct(product: Product) {
      this.productList.push(product)
      this.showAddProduct = false
    },

    deleteProduct() {
      this.productList = this.productList.filter(
        (product) => product.id !== this.toDelete
      )
      this.toDelete = null
    },

    updateProduct(product: Product) {
      this.productList = this.productList.map((p) => {
        if (p.id === product.id) {
          return product
        }
        return p
      })
      this.toEdit = null
    },

    generateSortedProductWidths() {
      this.sortedProductWidths = this.productList
        .map((p) => p.width)
        .filter((w, i, arr) => arr.indexOf(w) === i)
        .sort((a, b) => b - a)
    },
  },
  getters: {
    getById: (state) => {
      return (id: number): Product | null =>
        state.productList.find((p) => p.id === id) || null
    },
  },
})
