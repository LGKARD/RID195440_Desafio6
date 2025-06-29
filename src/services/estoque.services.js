import estoqueRepositories from "../repositories/estoque.repositories.js";
import produtoRepository from "../repositories/produto.repositories.js";

async function findEstoqueByProdutoIdService(id) {
    const estoque = await estoqueRepositories.findEstoqueByProdutoIdRepository(id);
    if (!estoque) throw new Error("Estoque não encontrado");
    return estoque;
}

async function updateEstoqueService(id_produto, newEstoque) {
    const foundProduto = await produtoRepository.findProdutoByIdRepository(id_produto);
    if (!foundProduto) throw new Error("Produto não encontrado");
    const estoque = await estoqueRepositories.updateEstoqueRepository(id_produto, newEstoque);
    return estoque;
}