import {IUseCase} from "../IUseCase";
import {IRepayment} from "../../Entities/Repayment";
import {IRepaymentRepository} from "../../Repositories/RepaymentRepositories/IRepaymentRepository";

interface Input {
  id: string
  repayment: IRepayment
}

export class UpdateRepaymentUseCase implements IUseCase<Input, IRepayment> {

  private repository: IRepaymentRepository

  constructor(repository: IRepaymentRepository) {
    this.repository = repository
  }

  execute({id, repayment}: Input): IRepayment {
    return this.repository.update(id, repayment)
  }


}
