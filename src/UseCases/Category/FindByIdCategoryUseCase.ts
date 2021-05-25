import {IUseCase} from "../IUseCase";
import {ICategory} from "../../Entities/Category";
import {ICategoryRepository} from "../../Repositories/CategoryRepositories/ICategoryRepository";

export class FindByIdCategoryUseCase implements IUseCase<string, ICategory> {

  private repository: ICategoryRepository

  constructor(repository: ICategoryRepository) {
    this.repository = repository
  }

  execute(id: string): ICategory {
    return this.repository.findById(id)
  }


}
