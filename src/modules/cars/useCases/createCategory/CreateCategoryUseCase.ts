import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

type IRequest = {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {  
  constructor(@inject("CategoriesRepository") private categoryRepository: ICategoriesRepository) { }

  async execute({ name, description }: IRequest) : Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new AppError("Esta categoria já existe!");
    }

    await this.categoryRepository.create({name, description});
  }
}

export { CreateCategoryUseCase };