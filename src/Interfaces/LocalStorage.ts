import {IStorage} from "./IStorage"

export class LocalStorage<T> implements IStorage<T> {
  private readonly localStorage: Storage
  private readonly name: string

  constructor(name: string, localStorage: Storage) {
    this.name = name
    this.localStorage = localStorage
  }

  add(params: T): T {
    const list = this.list()
    this.localStorage.setItem(this.name, JSON.stringify([...list, {...params}]))
    return {...params}
  }

  findByKey(key: string, value: any): T {
    const list: any = this.list()
    return list.find((item: any) => item[key] === value)
  }

  list(): T[] {
    const list = this.localStorage.getItem(this.name)
    return !!list && list !== '' ? JSON.parse(list) : []
  }

  remove(key: string, value: any): void {
    const list: any = this.list()
    const newList = list.filter((item: any) => item[key] !== value)
    this.localStorage.setItem(this.name, JSON.stringify(newList))
  }

  update(key: string, value: any, params: T): T {
    const list: any = this.list()
    let newValue = {...params}
    const newList = list.map((item: any) => {
      if (item[key] === value) {
        newValue = {...item, ...newValue}
        return newValue
      }
      return item
    })
    this.localStorage.setItem(this.name, JSON.stringify(newList))
    return newValue
  }

}
