import {IUseCase} from "../IUseCase";
import {IProduct} from "../../Entities/Product";
import {IProductRepository} from "../../Repositories/ProductRepositories/IProductRepository";

interface Input {
  id: string
  product: IProduct
}

export class UpdateProductUseCase implements IUseCase<Input, IProduct> {

  private repository: IProductRepository

  constructor(repository: IProductRepository) {
    this.repository = repository
  }

  execute({id, product}: Input): IProduct {
    return this.repository.update(id, product)
  }


}
