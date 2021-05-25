import {LocalStorage} from "../../Interfaces/LocalStorage";
import {ICategory} from "../../Entities/Category";
import {CreateCategoryUseCase} from "./CreateCategoryUseCase";
import {UpdateCategoryUseCase} from "./UpdateCategoryUseCase";
import {ListCategoryUseCase} from "./ListCategoryUseCase";
import {RemoveCategoryUseCase} from "./RemoveCategoryUseCase";
import {FindByIdCategoryUseCase} from "./FindByIdCategoryUseCase";
import {CategoryRepositoryLocalStorage} from "../../Repositories/CategoryRepositories/CategoryRepositoryLocalStorage";

const storage = new LocalStorage<ICategory>('categories', window.localStorage)
const repository = new CategoryRepositoryLocalStorage(storage)

const useCases = {
  create: new CreateCategoryUseCase(repository),
  update: new UpdateCategoryUseCase(repository),
  list: new ListCategoryUseCase(repository),
  remove: new RemoveCategoryUseCase(repository),
  findById: new FindByIdCategoryUseCase(repository),
}

export default useCases
