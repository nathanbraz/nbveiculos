import { Specification } from "../model/Specification";

type CreateSpecificationDTO = {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): void;
  findByName(name: string) : Specification;
}

export { ISpecificationRepository, CreateSpecificationDTO };