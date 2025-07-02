import { Router } from "express";
import clienteControllers from "../controller/cliente.controllers.js";
import { validate } from "../middlewares/validation.middleware.js";
import { clienteSchema } from "../schema/cliente.schema.js";

const router = Router();

router.post("/cliente", validate(clienteSchema), clienteControllers.createClienteController);
router.get("/cliente/:id", clienteControllers.findClienteByIdController);
router.get("/cliente/cpf/:cpf", clienteControllers.findClienteByCpfController);
router.get("/cliente", clienteControllers.findAllClientesController);
router.put("/cliente/:id", validate(clienteSchema), clienteControllers.updateClienteController);
router.delete("/cliente/:id", clienteControllers.deleteClienteController);

export default router;

