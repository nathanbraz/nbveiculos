import { Router } from "express";
import { Category } from "../model/Category";
import { CategoryRepository } from "../respositories/CategoryRepository";

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findByname(name);

  if(categoryAlreadyExists){
    throw response.status(400).json({ message: "Category name already exists!" });
  }

  categoryRepository.create({name, description});
  
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoryRepository.list();

  return response.json(all);
});


export { categoriesRoutes };