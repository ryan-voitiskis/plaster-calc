import { defineStore } from "pinia"
import { Area } from "../types/Area"
import { Product } from "../types/Product"
import { productStore } from "./productStore"
import { Sheet, Offcut } from "../types/SheetTypes"

export const areaStore = defineStore("area", {
  state: () => ({
    sheets: [] as Sheet[],
    offcuts: [] as Offcut[],
  }),
  actions: {},
  getters: {},
})
