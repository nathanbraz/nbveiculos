
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoriesController => {
  const categoryRepository = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

  const createCategoryController = new CreateCategoriesController(createCategoryUseCase);

  return createCategoryController;
}
