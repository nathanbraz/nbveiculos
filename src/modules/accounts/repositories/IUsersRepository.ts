import { CreateUserDTO } from "../dtos/CreateUserDTO";

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
}

export { IUsersRepository };