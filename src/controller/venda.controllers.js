import vendaServices from "../services/venda.services.js";

async function createVendaController(req, res) {
    const newVenda = req.body;
    try {
        const venda = await vendaServices.createVendaService(newVenda);
        res.status(201).json(venda);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function findVendaByIdController(req, res) {
    const id = req.params.id;
    try {
        const venda = await vendaServices.findVendaByIdService(id);
        res.status(200).json(venda);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function findAllVendasController(req, res) {
    try {
        const vendas = await vendaServices.findAllVendasService();
        res.status(200).json(vendas);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function updateVendaController(req, res) {
    const id = req.params.id;
    const newVenda = req.body;
    try {
        const venda = await vendaServices.updateVendaService(id, newVenda);
        res.status(200).json(venda);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function deleteVendaController(req, res) {
    const id = req.params.id;
    try {
        const message = await vendaServices.deleteVendaService(id);
        res.status(200).json({ message: message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export default {
    createVendaController,
    findVendaByIdController,
    findAllVendasController,
    updateVendaController,
    deleteVendaController
}