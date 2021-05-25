import {IUseCase} from "../IUseCase";
import {ISaleRepository} from "../../Repositories/SaleRepositories/ISaleRepository";

export class RemoveSaleUseCase implements IUseCase<string, void> {

  private repository: ISaleRepository

  constructor(repository: ISaleRepository) {
    this.repository = repository
  }

  execute(id: string): void {
    this.repository.remove(id)
  }


}
