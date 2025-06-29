import vendaRepository from "../repositories/venda.repositories.js";
import pedidoRepository from "../repositories/pedido.repositories.js";

export async function createVendaService(newVenda) {
    const { pedido_id } = newVenda;

    const foundPedido = await pedidoRepository.findPedidoByIdRepository(pedido_id);
    if (!foundPedido) throw new Error("Pedido não encontrado");

    const venda = await vendaRepository.createVendaRepository(newVenda);
    return venda;
}

async function findVendaByIdService(id) {
    const venda = await vendaRepository.findVendaByIdRepository(id);
    if (!venda) throw new Error("Venda não encontrada");
    return venda;
}

async function findAllVendasService() {
    const vendas = await vendaRepository.findAllVendasRepository();
    return vendas;
}

async function updateVendaService(id, newVenda) {
    const foundVenda = await vendaRepository.findVendaByIdRepository(id);
    if (!foundVenda) throw new Error("Venda não encontrada");
    const venda = await vendaRepository.updateVendaRepository(id, newVenda);
    return venda;
}

async function deleteVendaService(id) {
    const foundVenda = await vendaRepository.findVendaByIdRepository(id);
    if (!foundVenda) throw new Error("Venda não encontrada");
    const { message } = await vendaRepository.deleteVendaRepository(id);
    return message;
}

export default { createVendaService, findVendaByIdService, findAllVendasService, updateVendaService, deleteVendaService };