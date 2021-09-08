import { Category } from "../model/Category";

type CreateCategoryDTO = {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create({ name, description }: CreateCategoryDTO): void;
  findByName(name: string): Category;
  list(): Category[];
}

export { ICategoryRepository, CreateCategoryDTO };