
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoryRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryController = new CreateCategoriesController(createCategoryUseCase);

export { createCategoryController };