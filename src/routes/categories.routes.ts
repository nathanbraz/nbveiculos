import { Router } from "express";
import multer from 'multer';

import { CreateCategoriesController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { importNewCategoryController } from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importNewCategoryController.handle(request, response);
});


export { categoriesRoutes };