import produtoRepository from "../repositories/produto.repositories.js";

async function createProdutoService(newProduto) {
    const produto = await produtoRepository.createProdutoRepository(newProduto);
    return produto;
}

export default {
    createProdutoService
}