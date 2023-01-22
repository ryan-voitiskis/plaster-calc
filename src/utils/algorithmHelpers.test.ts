import { describe, beforeEach, test, expect } from "vitest"
import { selectAreaSheetHeights } from "./algorithmHelpers"

describe("algorithmHelpers", () => {
  beforeEach(() => {
    // ...
  })

  // call selectAreaSheetHeights with a target height of 2400, 2390, 2720
  test.each([
    {
      targetHeight: 2400,
      expected: [1200, 1200],
    },
    {
      targetHeight: 2390,
      expected: [1200, 1200],
    },
    {
      targetHeight: 2410,
      expected: [1350, 1200],
    },
    {
      targetHeight: 2720,
      expected: [1400, 1350],
    },
  ])("selectAreaSheetHeights", (data) => {
    const productWidths = [1400, 1350, 1200]
    const result = selectAreaSheetHeights(productWidths, data.targetHeight)
    expect(result).toEqual(data.expected)
  })
})
