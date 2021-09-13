import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

type IRequest = {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description}: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error("Esta especificação já existe!");
    }

    this.specificationsRepository.create({ name, description});
  }
}

export { CreateSpecificationUseCase };