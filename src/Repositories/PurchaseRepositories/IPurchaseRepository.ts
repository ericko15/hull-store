import {IPurchase} from "../../Entities/Purchase";

export interface IPurchaseRepository {
  create: (purchaseProps: IPurchase) => IPurchase
  update: (id: string, purchaseProps: IPurchase) => IPurchase
  list: () => IPurchase[]
  findById: (id: string) => IPurchase
  remove: (id: string) => void
}
