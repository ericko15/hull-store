import {IUseCase} from "../IUseCase";
import {IPurchase} from "../../Entities/Purchase";
import {IPurchaseRepository} from "../../Repositories/PurchaseRepositories/IPurchaseRepository";

interface Input {
  id: string
  purchase: IPurchase
}

export class UpdatePurchaseUseCase implements IUseCase<Input, IPurchase> {

  private repository: IPurchaseRepository

  constructor(repository: IPurchaseRepository) {
    this.repository = repository
  }

  execute({id, purchase}: Input): IPurchase {
    return this.repository.update(id, purchase)
  }


}
