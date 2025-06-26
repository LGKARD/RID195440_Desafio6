import { Router } from "express";
import clienteControllers from "../controller/cliente.controllers.js";

const router = Router();

router.post("/cliente", clienteControllers.createClienteController);
router.get("/cliente/:id", clienteControllers.findClienteByIdController);
router.get("/cliente/cpf/:cpf", clienteControllers.findClienteByCpfController);
router.get("/cliente", clienteControllers.findAllClientesController);
router.put("/cliente/:id", clienteControllers.updateClienteController);
router.delete("/cliente/:id", clienteControllers.deleteClienteController);

export default router;

