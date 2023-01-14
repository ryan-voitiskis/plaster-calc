import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import AreasToSheet from "../views/AreasToSheet.vue"
import MaterialList from "../views/MaterialList.vue"
import ProductsToUse from "../views/ProductsToUse.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "productsToUse",
    component: ProductsToUse,
  },
  {
    path: "/areas-to-sheet",
    name: "areasToSheet",
    component: AreasToSheet,
  },
  {
    path: "/material-list",
    name: "materialList",
    component: MaterialList,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
