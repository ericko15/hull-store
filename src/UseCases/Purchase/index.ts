import {LocalStorage} from "../../Interfaces/LocalStorage";
import {IPurchase} from "../../Entities/Purchase";
import {CreatePurchaseUseCase} from "./CreatePurchaseUseCase";
import {UpdatePurchaseUseCase} from "./UpdatePurchaseUseCase";
import {ListPurchaseUseCase} from "./ListPurchaseUseCase";
import {RemovePurchaseUseCase} from "./RemovePurchaseUseCase";
import {FindByIdPurchaseUseCase} from "./FindByIdPurchaseUseCase";
import {PurchaseRepositoryLocalStorage} from "../../Repositories/PurchaseRepositories/PurchaseRepositoryLocalStorage";

const storage = new LocalStorage<IPurchase>('purchases', window.localStorage)
const repository = new PurchaseRepositoryLocalStorage(storage)

const useCases = {
  create: new CreatePurchaseUseCase(repository),
  update: new UpdatePurchaseUseCase(repository),
  list: new ListPurchaseUseCase(repository),
  remove: new RemovePurchaseUseCase(repository),
  findById: new FindByIdPurchaseUseCase(repository),
}

export default useCases
