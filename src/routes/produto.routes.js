import { Router } from "express";
import produtoControllers from "../controller/produto.controllers.js";

const router = Router();

router.post("/produto", produtoControllers.createProdutoController);

export default router;