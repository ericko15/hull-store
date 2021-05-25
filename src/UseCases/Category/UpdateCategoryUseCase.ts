import {IUseCase} from "../IUseCase";
import {ICategory} from "../../Entities/Category";
import {ICategoryRepository} from "../../Repositories/CategoryRepositories/ICategoryRepository";

interface Input {
  id: string
  category: ICategory
}

export class UpdateCategoryUseCase implements IUseCase<Input, ICategory> {

  private repository: ICategoryRepository

  constructor(repository: ICategoryRepository) {
    this.repository = repository
  }

  execute({id, category}: Input): ICategory {
    return this.repository.update(id, category)
  }


}
