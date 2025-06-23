import produtoRepository from "../repositories/produto.repositories.js";

async function createProdutoService(newProduto) {
    const foundProduto = await produtoRepository.findProdutoByNameRepository(newProduto.nome_produto);
    if (foundProduto) throw new Error("Produto já cadastrado");
    const produto = await produtoRepository.createProdutoRepository(newProduto);
    return produto;
}

export default {
    createProdutoService
}