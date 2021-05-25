import {IUseCase} from "../IUseCase";
import {ISale} from "../../Entities/Sale";
import {ISaleRepository} from "../../Repositories/SaleRepositories/ISaleRepository";

export class FindByIdSaleUseCase implements IUseCase<string, ISale> {

  private repository: ISaleRepository

  constructor(repository: ISaleRepository) {
    this.repository = repository
  }

  execute(id: string): ISale {
    return this.repository.findById(id)
  }


}
