import {ISale} from "../../Entities/Sale"

export interface ISaleRepository {
  create: (saleProps: ISale) => ISale
  update: (id: string, saleProps: ISale) => ISale
  list: () => ISale[]
  findById: (id: string) => ISale
  remove: (id: string) => void
}
