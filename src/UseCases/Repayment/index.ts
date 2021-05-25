import {LocalStorage} from "../../Interfaces/LocalStorage";
import {RepaymentRepositoryLocalStorage} from "../../Repositories/RepaymentRepositories/RepaymentRepositoryLocalStorage";
import {IRepayment} from "../../Entities/Repayment";
import {CreateRepaymentUseCase} from "./CreateRepaymentUseCase";
import {UpdateRepaymentUseCase} from "./UpdateRepaymentUseCase";
import {ListRepaymentUseCase} from "./ListRepaymentUseCase";
import {RemoveRepaymentUseCase} from "./RemoveRepaymentUseCase";
import {FindByIdRepaymentUseCase} from "./FindByIdRepaymentUseCase";

const storage = new LocalStorage<IRepayment>('repayments', window.localStorage)
const repository = new RepaymentRepositoryLocalStorage(storage)

const useCases = {
  create: new CreateRepaymentUseCase(repository),
  update: new UpdateRepaymentUseCase(repository),
  list: new ListRepaymentUseCase(repository),
  remove: new RemoveRepaymentUseCase(repository),
  findById: new FindByIdRepaymentUseCase(repository),
}

export default useCases
