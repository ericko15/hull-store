import {IUseCase} from "../IUseCase";
import {ICategory} from "../../Entities/Category";
import {ICategoryRepository} from "../../Repositories/CategoryRepositories/ICategoryRepository";

export class CreateCategoryUseCase implements IUseCase<ICategory, ICategory> {

  private repository: ICategoryRepository

  constructor(repository: ICategoryRepository) {
    this.repository = repository
  }

  execute(params: ICategory): ICategory {
    return this.repository.create(params)
  }


}
