import clienteServices from "../services/cliente.services.js";

async function createClienteController(req, res) {
    const newCliente = req.body;
    try {
        const cliente = await clienteServices.createClienteService(newCliente);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function findClienteByIdController(req, res) {
    const id = req.params.id;
    try {
        const cliente = await clienteServices.findClienteByIdService(id);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function findClienteByCpfController(req, res) {
    const cpf = req.params.cpf;
    try {
        const cliente = await clienteServices.findClienteByCpfService(cpf);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function findAllClientesController(req, res) {
    try {
        const clientes = await clienteServices.findAllClientesService();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function updateClienteController(req, res) {
    const id = req.params.id;
    const newCliente = req.body;
    try {
        const cliente = await clienteServices.updateClienteService(id, newCliente);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function deleteClienteController(req, res) {
    const id = req.params.id;
    try {
        const message = await clienteServices.deleteClienteService(id);
        res.status(200).json({ message: message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export default { createClienteController, findClienteByIdController, findClienteByCpfController, findAllClientesController, updateClienteController, deleteClienteController };