import {IProduct} from "../../Entities/Product";

export interface IProductRepository {
  create: (productProps: IProduct) => IProduct
  update: (id: string, productProps: IProduct) => IProduct
  list: () => IProduct[]
  findById: (id: string) => IProduct
  remove: (id: string) => void
}
