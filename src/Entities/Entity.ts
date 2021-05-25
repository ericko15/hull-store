import {v4} from "uuid";

export abstract class Entity {

  readonly id: string

  protected constructor(id?: string) {
    if(id) this.id = id
    else this.id = v4()
  }

}
