import { Router } from "express";
import multer from 'multer';

import { CreateCategoriesController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoriesController();
const importCategoryControler = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.post("/import", upload.single("file"), importCategoryControler.handle);
categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };