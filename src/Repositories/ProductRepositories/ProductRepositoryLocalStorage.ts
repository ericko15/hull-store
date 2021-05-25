import {IProductRepository} from "./IProductRepository"
import {IProduct, Product} from "../../Entities/Product"
import {LocalStorage} from "../../Interfaces/LocalStorage"

export class ProductRepositoryLocalStorage implements IProductRepository{

  private readonly localStorage: LocalStorage<IProduct>

  constructor(localStorage: LocalStorage<IProduct>) {
    this.localStorage = localStorage
  }

  create(productProps: IProduct): IProduct {
    const product = Product.create(productProps)
    return this.localStorage.add(product)
  }

  findById(id: string): IProduct {
    return this.localStorage.findByKey('id', id)
  }

  list(): IProduct[] {
    return this.localStorage.list()
  }

  remove(id: string): void {
    this.localStorage.remove('id', id)
  }

  update(id: string, productProps: IProduct): IProduct {
    const product = Product.create(productProps)
    return this.localStorage.update('id', id, product)
  }

}
