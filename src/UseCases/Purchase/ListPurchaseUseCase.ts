import {IUseCase} from "../IUseCase";
import {IPurchase} from "../../Entities/Purchase";
import {IPurchaseRepository} from "../../Repositories/PurchaseRepositories/IPurchaseRepository";

export class ListPurchaseUseCase implements IUseCase<null, IPurchase[]> {

  private repository: IPurchaseRepository

  constructor(repository: IPurchaseRepository) {
    this.repository = repository
  }

  execute(): IPurchase[] {
    return this.repository.list()
  }


}
