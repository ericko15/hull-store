import {ICategory} from "../../Entities/Category";

export interface ICategoryRepository {
  create: (categoryProps: ICategory) => ICategory
  update: (id: string, categoryProps: ICategory) => ICategory
  list: () => ICategory[]
  findById: (id: string) => ICategory
  remove: (id: string) => void
}
