import {IUseCase} from "../IUseCase";
import {IPurchase} from "../../Entities/Purchase";
import {IPurchaseRepository} from "../../Repositories/PurchaseRepositories/IPurchaseRepository";

export class FindByIdPurchaseUseCase implements IUseCase<string, IPurchase> {

  private repository: IPurchaseRepository

  constructor(repository: IPurchaseRepository) {
    this.repository = repository
  }

  execute(id: string): IPurchase {
    return this.repository.findById(id)
  }


}
