import produtoRepository from "../repositories/produto.repositories.js";

async function createProdutoService(newProduto) {
    const foundProduto = await produtoRepository.findProdutoByNameRepository(newProduto.nome_produto);
    if (foundProduto) throw new Error("Produto já cadastrado");
    const produto = await produtoRepository.createProdutoRepository(newProduto);
    return produto;
}

async function findAllProdutosService() {
    const produtos = await produtoRepository.findAllProdutosRepository();
    return produtos;
}

async function findProdutoByIdService(id) {
    const produto = await produtoRepository.findProdutoByIdRepository(id);
    if (!produto) throw new Error("Produto não encontrado");
    return produto;
}

async function updateProdutoService(id, newProduto) {
    const foundProduto = await produtoRepository.findProdutoByIdRepository(id);
    if (!foundProduto) throw new Error("Produto não encontrado");
    const produto = await produtoRepository.updateProdutoRepository(id, newProduto);
    return produto;
}

async function deleteProdutoService(id) {
    const foundProduto = await produtoRepository.findProdutoByIdRepository(id);
    if (!foundProduto) throw new Error("Produto não encontrado");
    const { message } = await produtoRepository.deleteProdutoRepository(id);
    return message;
}

export default {
    createProdutoService,
    findAllProdutosService,
    findProdutoByIdService,
    updateProdutoService,
    deleteProdutoService
}