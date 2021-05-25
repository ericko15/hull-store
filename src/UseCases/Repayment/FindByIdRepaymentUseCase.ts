import {IUseCase} from "../IUseCase";
import {IRepayment} from "../../Entities/Repayment";
import {IRepaymentRepository} from "../../Repositories/RepaymentRepositories/IRepaymentRepository";

export class FindByIdRepaymentUseCase implements IUseCase<string, IRepayment> {

  private repository: IRepaymentRepository

  constructor(repository: IRepaymentRepository) {
    this.repository = repository
  }

  execute(id: string): IRepayment {
    return this.repository.findById(id)
  }


}
