import { Specification } from "../../entities/Specification";
import { CreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  public static getInstance(): SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE){
      this.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  constructor(){
    this.specifications = [];
  }
  
  create({ name, description }: CreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specifications.push(specification);
  }

  list(): Specification[]{
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name );
    return specification;
  }

}

export { SpecificationsRepository };