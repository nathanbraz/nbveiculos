import { Specification } from "../entities/Specification";

type CreateSpecificationDTO = {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: CreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}

export { ISpecificationsRepository, CreateSpecificationDTO };