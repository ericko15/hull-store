import {IUseCase} from "../IUseCase";
import {IRepayment} from "../../Entities/Repayment";
import {IRepaymentRepository} from "../../Repositories/RepaymentRepositories/IRepaymentRepository";

export class ListRepaymentUseCase implements IUseCase<null, IRepayment[]> {

  private repository: IRepaymentRepository

  constructor(repository: IRepaymentRepository) {
    this.repository = repository
  }

  execute(): IRepayment[] {
    return this.repository.list()
  }


}
