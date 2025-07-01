import pedidoRepositories from "../repositories/pedido.repositories.js";
import clienteRepository from "../repositories/cliente.repositories.js";
import produtoRepository from "../repositories/produto.repositories.js";
import estoqueServices from "./estoque.services.js";

async function createPedidoService(newPedido) {
    const { id_cliente, id_produto, qtde } = newPedido;
    
    const foundCliente = await clienteRepository.findClienteByIdRepository(id_cliente);
    if (!foundCliente) throw new Error("Cliente não encontrado");

    const foundProduto = await produtoRepository.findProdutoByIdRepository(id_produto);
    if (!foundProduto) throw new Error("Produto não encontrado");

    const estoque = await estoqueServices.findEstoqueByProdutoIdService(id_produto);
    if (!estoque) throw new Error("Estoque não encontrado para o produto selecionado");

    if (newPedido.qtde > estoque.quantidade) throw new Error("Estoque insuficiente para o pedido");

    const newEstoque = { quantidade: estoque.quantidade - newPedido.qtde };
    await estoqueServices.updateEstoqueService(id_produto, newEstoque);

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

    const { id_produto, qtde } = foundPedido;

    const estoque = await estoqueServices.findEstoqueByProdutoIdService(id_produto);
    if (!estoque) throw new Error("Estoque não encontrado para o produto selecionado");

    const newEstoque = { quantidade: estoque.quantidade + qtde };
    await estoqueServices.updateEstoqueService(id_produto, newEstoque);


    const { message } = await pedidoRepositories.deletePedidoRepository(id);
    return message;
}

export default { createPedidoService, findAllPedidosService, findPedidoByIdService, updatePedidoService, deletePedidoService };