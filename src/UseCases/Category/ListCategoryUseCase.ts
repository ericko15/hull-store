import {IUseCase} from "../IUseCase";
import {ICategory} from "../../Entities/Category";
import {ICategoryRepository} from "../../Repositories/CategoryRepositories/ICategoryRepository";

export class ListCategoryUseCase implements IUseCase<null, ICategory[]> {

  private repository: ICategoryRepository

  constructor(repository: ICategoryRepository) {
    this.repository = repository
  }

  execute(): ICategory[] {
    return this.repository.list()
  }


}
