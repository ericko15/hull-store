import {IUseCase} from "../IUseCase";
import {IRepayment} from "../../Entities/Repayment";
import {IRepaymentRepository} from "../../Repositories/RepaymentRepositories/IRepaymentRepository";

export class CreateRepaymentUseCase implements IUseCase<IRepayment, IRepayment> {

  private repository: IRepaymentRepository

  constructor(repository: IRepaymentRepository) {
    this.repository = repository
  }

  execute(params: IRepayment): IRepayment {
    return this.repository.create(params)
  }


}
