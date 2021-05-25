import {IRepaymentRepository} from "./IRepaymentRepository"
import {LocalStorage} from "../../Interfaces/LocalStorage"
import {IRepayment, Repayment} from "../../Entities/Repayment";

export class RepaymentRepositoryLocalStorage implements IRepaymentRepository{

  private readonly localStorage: LocalStorage<IRepayment>

  constructor(localStorage: LocalStorage<IRepayment>) {
    this.localStorage = localStorage
  }

  create(repaymentProps: IRepayment): IRepayment {
    const repayment = Repayment.create(repaymentProps)
    return this.localStorage.add(repayment)
  }

  findById(id: string): IRepayment {
    return this.localStorage.findByKey('id', id)
  }

  list(): IRepayment[] {
    return this.localStorage.list()
  }

  remove(id: string): void {
    this.localStorage.remove('id', id)
  }

  update(id: string, repaymentProps: IRepayment): IRepayment {
    const repayment = Repayment.create(repaymentProps)
    return this.localStorage.update('id', id, repayment)
  }

}
