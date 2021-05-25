import {IUseCase} from "../IUseCase";
import {IProduct} from "../../Entities/Product";
import {IProductRepository} from "../../Repositories/ProductRepositories/IProductRepository";

export class ListProductUseCase implements IUseCase<null, IProduct[]> {

  private repository: IProductRepository

  constructor(repository: IProductRepository) {
    this.repository = repository
  }

  execute(): IProduct[] {
    return this.repository.list()
  }


}
