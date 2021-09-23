import { compare } from 'bcrypt';
import { inject, injectable } from "tsyringe";
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from "../../repositories/IUsersRepository";


type Request = {
  email: string;
  password: string;
}

type Response = {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) { }

  async execute({ email, password }: Request): Promise<Response> {
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new Error("Email e/ou senha incorretos");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Email e/ou senha incorretos");
    }

    const token = sign({}, "965f86ed8441150abbfe32de1c8d76f7", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: Response = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };