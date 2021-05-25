import {IUseCase} from "../IUseCase";
import {ISale} from "../../Entities/Sale";
import {ISaleRepository} from "../../Repositories/SaleRepositories/ISaleRepository";

export class ListSaleUseCase implements IUseCase<null, ISale[]> {

  private repository: ISaleRepository

  constructor(repository: ISaleRepository) {
    this.repository = repository
  }

  execute(): ISale[] {
    return this.repository.list()
  }


}
