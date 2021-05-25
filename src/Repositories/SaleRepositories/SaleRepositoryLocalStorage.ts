import {ISaleRepository} from "./ISaleRepository"
import {LocalStorage} from "../../Interfaces/LocalStorage"
import {ISale, Sale} from "../../Entities/Sale";

export class SaleRepositoryLocalStorage implements ISaleRepository{

  private readonly localStorage: LocalStorage<ISale>

  constructor(localStorage: LocalStorage<ISale>) {
    this.localStorage = localStorage
  }

  create(saleProps: ISale): ISale {
    const sale = Sale.create(saleProps)
    return this.localStorage.add(sale)
  }

  findById(id: string): ISale {
    return this.localStorage.findByKey('id', id)
  }

  list(): ISale[] {
    return this.localStorage.list()
  }

  remove(id: string): void {
    this.localStorage.remove('id', id)
  }

  update(id: string, saleProps: ISale): ISale {
    const sale = Sale.create(saleProps)
    return this.localStorage.update('id', id, sale)
  }

}
