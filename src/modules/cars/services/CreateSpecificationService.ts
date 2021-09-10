import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

type IRequest = {
  name: string;
  description: string;
}

class CreateSpecificationsService { 
  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if(specificationAlreadyExists){
      throw new Error("Já existe uma especificação com este nome!");
    }

    this.specificationRepository.create({name, description});
  }
}

export { CreateSpecificationsService };


