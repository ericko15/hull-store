import {IUseCase} from "../IUseCase";
import {IPurchase} from "../../Entities/Purchase";
import {IPurchaseRepository} from "../../Repositories/PurchaseRepositories/IPurchaseRepository";

export class CreatePurchaseUseCase implements IUseCase<IPurchase, IPurchase> {

  private repository: IPurchaseRepository

  constructor(repository: IPurchaseRepository) {
    this.repository = repository
  }

  execute(params: IPurchase): IPurchase {
    return this.repository.create(params)
  }


}
