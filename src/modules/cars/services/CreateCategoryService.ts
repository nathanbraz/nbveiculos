import { ICategoryRepository } from "../repositories/ICategoryRepository";

type IRequest = {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) { }

  execute({ name, description }: IRequest) : void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Esta categoria já existe!");
    }

    this.categoryRepository.create({name, description});
  }
}

export { CreateCategoryService };