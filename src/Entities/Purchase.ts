import {IProduct} from "./Product";
import {Entity} from "./Entity";

export interface IPurchase {
  id?: string
  invoice: string
  date: string
  product: IProduct
  price: number
  quantity: number
}

export class Purchase extends Entity implements IPurchase{
  readonly date: string
  readonly invoice: string
  readonly product: IProduct
  readonly quantity: number
  readonly price: number

  private constructor(props: IPurchase) {
    super(props.id)
    this.date = props.date
    this.invoice = props.invoice
    this.product = props.product
    this.quantity = props.quantity
    this.price = props.price
  }

  static create(props: IPurchase): Purchase {
    return new Purchase(props)
  }

}
