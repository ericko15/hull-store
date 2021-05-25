import {IProduct} from "./Product";
import {IPurchase} from "./Purchase";
import {ISale} from "./Sale";
import {Entity} from "./Entity";

type TRepaymentType = 'SALE' | 'PURCHASE'

export interface IRepayment {
  id?: string
  type: TRepaymentType
  invoice: ISale | IPurchase
  date: string
  product: IProduct
  quantity: number
}

export class Repayment extends Entity implements IRepayment{
  readonly date: string
  readonly invoice: ISale | IPurchase
  readonly product: IProduct
  readonly quantity: number
  readonly type: TRepaymentType

  private constructor(props: IRepayment) {
    super(props.id)
    this.date = props.date
    this.invoice = props.invoice
    this.product = props.product
    this.quantity = props.quantity
    this.type = props.type
  }

  static create(props: IRepayment): Repayment {
    return new Repayment(props)
  }

}
