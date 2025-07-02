import { Router } from "express";
import pedidoControllers from "../controller/pedido.controllers.js";
import { validate } from "../middlewares/validation.middleware.js";
import { pedidoSchema } from "../schema/pedido.schema.js"; 

const router = Router();

router.post("/pedido", validate(pedidoSchema), pedidoControllers.createPedidoController);
router.get("/pedido/:id", pedidoControllers.findPedidoByIdController);
router.get("/pedido", pedidoControllers.findAllPedidosController);
router.put("/pedido/:id", validate(pedidoSchema), pedidoControllers.updatePedidoController);
router.delete("/pedido/:id", pedidoControllers.deletePedidoController);

export default router;
