import {IUseCase} from "../IUseCase";
import {ISale} from "../../Entities/Sale";
import {ISaleRepository} from "../../Repositories/SaleRepositories/ISaleRepository";

interface Input {
  id: string
  sale: ISale
}

export class UpdateSaleUseCase implements IUseCase<Input, ISale> {

  private repository: ISaleRepository

  constructor(repository: ISaleRepository) {
    this.repository = repository
  }

  execute({id, sale}: Input): ISale {
    return this.repository.update(id, sale)
  }


}
