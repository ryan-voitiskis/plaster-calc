import { defineStore } from "pinia"
// import { areaStore } from "./areaStore"
import { Area } from "../types/Area"

export const areaStore = defineStore("area", {
  state: () => ({
    areaList: [] as Area[],
  }),
  actions: {},
  getters: {},
})
