import {IUseCase} from "../IUseCase";
import {IProduct} from "../../Entities/Product";
import {IProductRepository} from "../../Repositories/ProductRepositories/IProductRepository";

export class FindByIdProductUseCase implements IUseCase<string, IProduct> {

  private repository: IProductRepository

  constructor(repository: IProductRepository) {
    this.repository = repository
  }

  execute(id: string): IProduct {
    return this.repository.findById(id)
  }


}
