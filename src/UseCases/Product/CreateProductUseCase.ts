import {IUseCase} from "../IUseCase";
import {IProduct} from "../../Entities/Product";
import {IProductRepository} from "../../Repositories/ProductRepositories/IProductRepository";

export class CreateProductUseCase implements IUseCase<IProduct, IProduct> {

  private repository: IProductRepository

  constructor(repository: IProductRepository) {
    this.repository = repository
  }

  execute(params: IProduct): IProduct {
    return this.repository.create(params)
  }


}
