// A Sheet is a sheet of material. productID is the ID of the Product type.
type Sheet = {
  id: number
  productID: number
}

// A SheetPart is a part of a sheet used to cover an area.
type SheetPart = {
  id: number
  sheetID: number
  hung: boolean // whether the sheet is hung or not, helps the user keep track of their progress when installing the sheets.
  width: number // (mm)
  length: number // (mm)
}

// An offcut is the remaining piece of a sheet that has been used to sheet an area. Can be used to sheet another area.
export type Offcut = {
  id: number
  sheetID: number
  width: number // (mm)
  length: number // (mm)
  thickness: number // (mm)
}

export type { Sheet, SheetPart }
