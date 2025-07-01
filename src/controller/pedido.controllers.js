import pedidoServices from "../services/pedido.services.js";

async function createPedidoController(req, res) {
    const newPedido = req.body;
    console.log("🔍 Pedido recebido:", newPedido);
    try {
        const pedido = await pedidoServices.createPedidoService(newPedido);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function findAllPedidosController(req, res) {
    try {
        const pedidos = await pedidoServices.findAllPedidosService();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function findPedidoByIdController(req, res) {
    const id = req.params.id;
    try {
        const pedido = await pedidoServices.findPedidoByIdService(id);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
async function updatePedidoController(req, res) {
    const id = req.params.id;
    const newPedido = req.body;
    try {
        const pedido = await pedidoServices.updatePedidoService(id, newPedido);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
async function deletePedidoController(req, res) {
    const id = req.params.id;
    try {
        const message = await pedidoServices.deletePedidoService(id);
        res.status(200).json({ message: message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export default {
    createPedidoController,
    findAllPedidosController,
    findPedidoByIdController,
    updatePedidoController,
    deletePedidoController,
};