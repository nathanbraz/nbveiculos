import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

type Payload = {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError("Sem permissão", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "965f86ed8441150abbfe32de1c8d76f7") as Payload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if(!user) {
      throw new AppError("Usuário inexistente", 401);
    }

    next();
  } catch {
    throw new AppError("Token inválido", 401);
  }
}