import { Router } from "express";
import produtoControllers from "../controller/produto.controllers.js";
import { validate } from "../middlewares/validation.middleware.js";
import { produtoSchema } from "../schema/produto.schema.js";

const router = Router();

router.post("/produto", validate(produtoSchema), produtoControllers.createProdutoController);

export default router;