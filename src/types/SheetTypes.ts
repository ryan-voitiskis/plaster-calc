// A Sheet is a sheet of material. productID is the ID of the Product type.
type Sheet = {
  id: number
  productID: number
}

// A SheetableArea is part of, or all of, an area that can be sheeted.
// It is used as an intermediate step in the calculation. Breaking down the problem.
type SheetableArea = {
  width: number // (mm)
  length: number // (mm)
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
type Offcut = {
  id: number
  sheetID: number
  width: number // (mm)
  length: number // (mm)
  thickness: number // (mm)
}

export type { Sheet, SheetableArea, SheetPart, Offcut }
