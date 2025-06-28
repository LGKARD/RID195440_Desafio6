import { Router } from "express";
import pedidoControllers from "../controller/pedido.controllers.js";

const router = Router();

router.post("/pedido", pedidoControllers.createPedidoController);
router.get("/pedido/:id", pedidoControllers.findPedidoByIdController);
router.get("/pedido", pedidoControllers.findAllPedidosController);
router.put("/pedido/:id", pedidoControllers.updatePedidoController);
router.delete("/pedido/:id", pedidoControllers.deletePedidoController);

export default router;
