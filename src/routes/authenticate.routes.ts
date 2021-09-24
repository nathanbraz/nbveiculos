import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";


const authenticanteRoutes = Router();
const authenticateUseController = new AuthenticateUserController();

authenticanteRoutes.post("/sessions", authenticateUseController.handle);

export { authenticanteRoutes };