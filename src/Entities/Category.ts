import {Entity} from "./Entity";

export interface ICategory {
  id?: string
  name: string
}

export class Category extends Entity implements ICategory{
  readonly name: string

  private constructor(props: ICategory) {
    super(props.id)
    this.name = props.name
  }

  static create(props: ICategory): Category {
    return new Category(props)
  }

}
