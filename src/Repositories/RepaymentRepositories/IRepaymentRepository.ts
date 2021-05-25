import {IRepayment} from "../../Entities/Repayment";

export interface IRepaymentRepository {
  create: (repaymentProps: IRepayment) => IRepayment
  update: (id: string, repaymentProps: IRepayment) => IRepayment
  list: () => IRepayment[]
  findById: (id: string) => IRepayment
  remove: (id: string) => void
}
