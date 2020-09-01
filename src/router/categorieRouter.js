import express from "express";
import CategorieController from "../controllers/categorieController";

// api/v1/categories
const router = express.Router();

router
  .route("/categories")
  .post(CategorieController.create)
  .get(CategorieController.getCategories);

export default router;
