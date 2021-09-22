import { Category } from "../entities/Category";

type CreateCategoryDTO = {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): void;
  findByName(name: string): Category;
  list(): Category[];
}

export { ICategoriesRepository, CreateCategoryDTO };