import {IPurchaseRepository} from "./IPurchaseRepository"
import {IPurchase, Purchase} from "../../Entities/Purchase"
import {LocalStorage} from "../../Interfaces/LocalStorage"

export class PurchaseRepositoryLocalStorage implements IPurchaseRepository{

  private readonly localStorage: LocalStorage<IPurchase>

  constructor(localStorage: LocalStorage<IPurchase>) {
    this.localStorage = localStorage
  }

  create(purchaseProps: IPurchase): IPurchase {
    const purchase = Purchase.create(purchaseProps)
    return this.localStorage.add(purchase)
  }

  findById(id: string): IPurchase {
    return this.localStorage.findByKey('id', id)
  }

  list(): IPurchase[] {
    return this.localStorage.list()
  }

  remove(id: string): void {
    this.localStorage.remove('id', id)
  }

  update(id: string, purchaseProps: IPurchase): IPurchase {
    const purchase = Purchase.create(purchaseProps)
    return this.localStorage.update('id', id, purchase)
  }

}
