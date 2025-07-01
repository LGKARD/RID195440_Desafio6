import { Router } from "express";
import estoqueControllers from "../controller/estoque.controllers.js";

const router = Router();

router.get("/estoque/:id", estoqueControllers.findEstoqueByProdutoIdController);
router.put("/estoque/:id", estoqueControllers.updateEstoqueController);

export default router;
