import { Router } from "express";
import produtoControllers from "../controller/produto.controllers.js";
import { validate, validateProdutoId } from "../middlewares/validation.middleware.js";
import { produtoSchema } from "../schema/produto.schema.js";

const router = Router();

router.post("/produto", validate(produtoSchema), produtoControllers.createProdutoController);
router.get("/produto/:id", validateProdutoId, produtoControllers.findProdutoByIdController);
router.get("/produto", produtoControllers.findAllProdutoController);
router.put("/produto/:id", validate(produtoSchema), validateProdutoId, produtoControllers.updateProdutoController);
router.delete("/produto/:id", validateProdutoId, produtoControllers.deleteProdutoController);

export default router;