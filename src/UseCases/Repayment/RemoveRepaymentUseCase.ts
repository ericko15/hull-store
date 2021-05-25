import {IUseCase} from "../IUseCase";
import {IRepaymentRepository} from "../../Repositories/RepaymentRepositories/IRepaymentRepository";

export class RemoveRepaymentUseCase implements IUseCase<string, void> {

  private repository: IRepaymentRepository

  constructor(repository: IRepaymentRepository) {
    this.repository = repository
  }

  execute(id: string): void {
    this.repository.remove(id)
  }


}
