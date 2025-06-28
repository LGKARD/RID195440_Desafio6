import pedidoRepositories from "../repositories/pedido.repositories.js";

async function createPedidoService(newPedido) {
    const pedido = await pedidoRepositories.createPedidoRepository(newPedido);
    return pedido;
}

async function findAllPedidosService() {
    const pedidos = await pedidoRepositories.findAllPedidosRepository();
    return pedidos;
}

async function findPedidoByIdService(id) {
    const pedido = await pedidoRepositories.findPedidoByIdRepository(id);
    if (!pedido) throw new Error("Pedido não encontrado");
    return pedido;
}

async function updatePedidoService(id, newPedido) {
    const foundPedido = await pedidoRepositories.findPedidoByIdRepository(id);
    if (!foundPedido) throw new Error("Pedido não encontrado");
    const pedido = await pedidoRepositories.updatePedidoRepository(id, newPedido);
    return pedido;
}

async function deletePedidoService(id) {
    const foundPedido = await pedidoRepositories.findPedidoByIdRepository(id);
    if (!foundPedido) throw new Error("Pedido não encontrado");
    const { message } = await pedidoRepositories.deletePedidoRepository(id);
    return message;
}

export default { createPedidoService, findAllPedidosService, findPedidoByIdService, updatePedidoService, deletePedidoService };