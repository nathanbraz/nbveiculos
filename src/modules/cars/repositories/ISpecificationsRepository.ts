import { Specification } from "../model/Specification";

type CreateSpecificationDTO = {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: CreateSpecificationDTO): void;
  findByName(name: string) : Specification;
  list(): Specification[];
}

export { ISpecificationsRepository, CreateSpecificationDTO };