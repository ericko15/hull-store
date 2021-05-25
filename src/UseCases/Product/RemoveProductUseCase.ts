import {IUseCase} from "../IUseCase";
import {IProductRepository} from "../../Repositories/ProductRepositories/IProductRepository";

export class RemoveProductUseCase implements IUseCase<string, void> {

  private repository: IProductRepository

  constructor(repository: IProductRepository) {
    this.repository = repository
  }

  execute(id: string): void {
    this.repository.remove(id)
  }


}
