import {ICategory} from "./Category";
import {Entity} from "./Entity";

export interface IProduct {
  id?: string
  name: string
  category: ICategory
  purchasePrice: number
  salePrice: number
  initialStock: number
}

export class Product extends Entity implements IProduct{
  readonly category: ICategory
  readonly initialStock: number
  readonly name: string
  readonly purchasePrice: number
  readonly salePrice: number

  private constructor(props: IProduct) {
    super(props.id)
    this.category = props.category
    this.initialStock = props.initialStock
    this.name = props.name
    this.purchasePrice = props.purchasePrice
    this.salePrice = props.salePrice
  }

  static create(props: IProduct): Product {
    return new Product(props)
  }

}
