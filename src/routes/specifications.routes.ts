import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';

import { CreateSpecificationsService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description} = request.body;
  const createSpecificationService = new CreateSpecificationsService(specificationRepository);

  createSpecificationService.execute({ name, description});

  return response.status(201).send();
})

export { specificationsRoutes };