export interface IUseCase<Input, Output> {
  execute(params: Input): Output
}
