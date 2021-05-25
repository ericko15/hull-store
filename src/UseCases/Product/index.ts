import {LocalStorage} from "../../Interfaces/LocalStorage";
import {ProductRepositoryLocalStorage} from "../../Repositories/ProductRepositories/ProductRepositoryLocalStorage";
import {IProduct} from "../../Entities/Product";
import {CreateProductUseCase} from "./CreateProductUseCase";
import {UpdateProductUseCase} from "./UpdateProductUseCase";
import {ListProductUseCase} from "./ListProductUseCase";
import {RemoveProductUseCase} from "./RemoveProductUseCase";
import {FindByIdProductUseCase} from "./FindByIdProductUseCase";

const storage = new LocalStorage<IProduct>('products', window.localStorage)
const repository = new ProductRepositoryLocalStorage(storage)

const useCases = {
  create: new CreateProductUseCase(repository),
  update: new UpdateProductUseCase(repository),
  list: new ListProductUseCase(repository),
  remove: new RemoveProductUseCase(repository),
  findById: new FindByIdProductUseCase(repository),
}

export default useCases
