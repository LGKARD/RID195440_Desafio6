import { Router } from "express";
import vendaControllers from "../controller/venda.controllers.js";

const router = Router();

router.post("/venda", vendaControllers.createVendaController);
router.get("/venda/:id", vendaControllers.findVendaByIdController);
router.get("/venda", vendaControllers.findAllVendasController);
router.put("/venda/:id", vendaControllers.updateVendaController);
router.delete("/venda/:id", vendaControllers.deleteVendaController);

export default router;