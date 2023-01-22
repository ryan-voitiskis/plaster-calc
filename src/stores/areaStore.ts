import { defineStore } from "pinia"
import { Area } from "../types/Area"
import { SheetableArea } from "../types/SheetTypes"
import { selectAreaSheetHeights } from "../utils/algorithmHelpers"
import { productStore } from "./productStore"

export const areaStore = defineStore("area", {
  state: () => ({
    areaList: [
      {
        id: 1,
        room: "Bedroom 1",
        letter: "A",
        height: 2380,
        length: 2450,
        possiblyVertical: false,
        sheets: [],
        sheetableAreas: [],
      },
      {
        id: 2,
        room: "Bedroom 1",
        letter: "B",
        height: 2380,
        length: 3220,
        possiblyVertical: false,
        sheets: [],
        sheetableAreas: [],
      },
      {
        id: 3,
        room: "Bedroom 1",
        letter: "C",
        height: 2380,
        length: 2450,
        possiblyVertical: false,
        sheets: [],
        sheetableAreas: [],
      },
      {
        id: 2,
        room: "Bedroom 1",
        letter: "D",
        height: 2380,
        length: 3220,
        possiblyVertical: false,
        sheets: [],
        sheetableAreas: [],
      },
    ] as Area[],
    sheetableAreas: [] as SheetableArea[],
  }),
  actions: {
    addArea(area: Area) {
      this.areaList.push(area)
    },

    removeArea(area: Area) {
      this.areaList = this.areaList.filter((a) => a.id !== area.id)
    },

    updateArea(area: Area) {
      this.areaList = this.areaList.map((a) => (a.id === area.id ? area : a))
    },

    generateSheetableAreas() {
      const products = productStore()
      products.generateSortedProductWidths()
      this.areaList.forEach((area) => {
        const sheetWidths = selectAreaSheetHeights(
          products.sortedProductWidths,
          area.height
        )
        area.sheetableAreas = sheetWidths.map((width) => ({
          width: width,
          length: area.length,
        }))
      })
    },
  },
  getters: {},
})
