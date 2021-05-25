import {IUseCase} from "../IUseCase";
import {ICategoryRepository} from "../../Repositories/CategoryRepositories/ICategoryRepository";

export class RemoveCategoryUseCase implements IUseCase<string, void> {

  private repository: ICategoryRepository

  constructor(repository: ICategoryRepository) {
    this.repository = repository
  }

  execute(id: string): void {
    this.repository.remove(id)
  }


}
