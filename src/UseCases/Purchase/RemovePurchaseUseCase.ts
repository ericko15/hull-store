import {IUseCase} from "../IUseCase";
import {IPurchaseRepository} from "../../Repositories/PurchaseRepositories/IPurchaseRepository";

export class RemovePurchaseUseCase implements IUseCase<string, void> {

  private repository: IPurchaseRepository

  constructor(repository: IPurchaseRepository) {
    this.repository = repository
  }

  execute(id: string): void {
    this.repository.remove(id)
  }


}
