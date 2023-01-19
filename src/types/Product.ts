// A product is a material option that can be used to cover an area. Products should be seen as infinite in quantity as more can be purchased if needed. width, length and thickness are in mm. price is in AUD. either price or pricePerSqm must be provided and the other will be calculated. This is to allow for products that are sold by the sheet or by the square metre.
export type Product = {
  id: number
  name?: string
  supplier?: string
  width: number
  length: number
  thickness: number
  price?: number
  pricePerSqm?: number
}
