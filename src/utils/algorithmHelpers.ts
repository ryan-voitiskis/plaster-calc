// returns an array of product widths to be used to sheet an area
// productWidths must be sorted in descending order before passing to this function
// this is a greedy style algorithm

function selectAreaSheetHeights(productWidths: number[], targetHeight: number) {
  let result = []
  let currentSum = 0

  // the quantity of smallest product width that can be used to sheet the area
  let smallestProductWidthQuantity = Math.ceil(
    targetHeight / productWidths[productWidths.length - 1]
  )

  let options: number[][]

  for (let i = 0; i < smallestProductWidthQuantity; i++) {}

  for (let width of productWidths) {
    if (currentSum + width <= targetHeight) {
      currentSum += width
      result.push(width)
    }
  }
  return result
}

export { selectAreaSheetHeights }
