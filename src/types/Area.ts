import { SheetPart, SheetableArea } from "./SheetTypes"

// An Area is an area of a room to be sheeted.
export type Area = {
  id: number
  room?: string // optionally used to identify the area
  letter: string // used to identify the area
  height: number // (mm)
  length: number // (mm)
  possiblyVertical: false // only vertical if stand up sheet. when only one sheet used floor to ceiling.
  sheets: SheetPart[]
  sheetableAreas: SheetableArea[]
}
