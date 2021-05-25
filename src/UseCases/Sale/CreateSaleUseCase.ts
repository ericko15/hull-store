import {IUseCase} from "../IUseCase";
import {ISale} from "../../Entities/Sale";
import {ISaleRepository} from "../../Repositories/SaleRepositories/ISaleRepository";

export class CreateSaleUseCase implements IUseCase<ISale, ISale> {

  private repository: ISaleRepository

  constructor(repository: ISaleRepository) {
    this.repository = repository
  }

  execute(params: ISale): ISale {
    return this.repository.create(params)
  }


}
