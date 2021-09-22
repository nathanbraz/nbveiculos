import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){ }

  async execute({ name, email, password, driver_license }: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      throw new Error("Usuário já existente");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license
    });
  }
}

export { CreateUserUseCase };