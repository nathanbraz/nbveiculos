import { Category } from "../entities/Category";

type CreateCategoryDTO = {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}

export { ICategoriesRepository, CreateCategoryDTO };