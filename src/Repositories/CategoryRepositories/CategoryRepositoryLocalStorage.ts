import {ICategoryRepository} from "./ICategoryRepository"
import {Category, ICategory} from "../../Entities/Category"
import {LocalStorage} from "../../Interfaces/LocalStorage"

export class CategoryRepositoryLocalStorage implements ICategoryRepository{

  private readonly localStorage: LocalStorage<ICategory>

  constructor(localStorage: LocalStorage<ICategory>) {
    this.localStorage = localStorage
  }

  create(categoryProps: ICategory): ICategory {
    const category = Category.create(categoryProps)
    return this.localStorage.add(category)
  }

  findById(id: string): ICategory {
    return this.localStorage.findByKey('id', id)
  }

  list(): ICategory[] {
    return this.localStorage.list()
  }

  remove(id: string): void {
    this.localStorage.remove('id', id)
  }

  update(id: string, categoryProps: ICategory): ICategory {
    const category = Category.create(categoryProps)
    return this.localStorage.update('id', id, category)
  }

}
