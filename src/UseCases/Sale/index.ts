import {LocalStorage} from "../../Interfaces/LocalStorage";
import {SaleRepositoryLocalStorage} from "../../Repositories/SaleRepositories/SaleRepositoryLocalStorage";
import {ISale} from "../../Entities/Sale";
import {CreateSaleUseCase} from "./CreateSaleUseCase";
import {ListSaleUseCase} from "./ListSaleUseCase";
import {RemoveSaleUseCase} from "./RemoveSaleUseCase";
import {FindByIdSaleUseCase} from "./FindByIdSaleUseCase";
import {UpdateSaleUseCase} from "./UpdateSaleUseCase";

const storage = new LocalStorage<ISale>('sales', window.localStorage)
const repository = new SaleRepositoryLocalStorage(storage)

const useCases = {
  create: new CreateSaleUseCase(repository),
  update: new UpdateSaleUseCase(repository),
  list: new ListSaleUseCase(repository),
  remove: new RemoveSaleUseCase(repository),
  findById: new FindByIdSaleUseCase(repository),
}

export default useCases
