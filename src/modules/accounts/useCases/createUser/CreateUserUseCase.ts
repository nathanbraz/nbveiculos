import { inject, injectable } from "tsyringe";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){ }

  async execute({ name, username, email, password, driver_license }: CreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license
    });
  }
}

export { CreateUserUseCase };