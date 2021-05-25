export interface IStorage<T> {
  add: (params: T) => T
  list: () => T[]
  findByKey: (key: string, value: any) => T
  update: (key: string, value: any, params: T) => T
  remove: (key: string, value: any) => void
}
