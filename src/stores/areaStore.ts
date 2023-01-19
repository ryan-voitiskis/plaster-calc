import { defineStore } from "pinia"
import { Area } from "../types/Area"

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
      },
      {
        id: 2,
        room: "Bedroom 1",
        letter: "B",
        height: 2380,
        length: 3220,
        possiblyVertical: false,
        sheets: [],
      },
      {
        id: 3,
        room: "Bedroom 1",
        letter: "C",
        height: 2380,
        length: 2450,
        possiblyVertical: false,
        sheets: [],
      },
      {
        id: 2,
        room: "Bedroom 1",
        letter: "D",
        height: 2380,
        length: 3220,
        possiblyVertical: false,
        sheets: [],
      },
    ] as Area[],
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
  },
  getters: {},
})
