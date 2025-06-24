import produtoServices from "../services/produto.services.js";


async function createProdutoController(req, res) {
    const newProduto = req.body;
    try {
        const produto = await produtoServices.createProdutoService(newProduto);
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function findProdutoByIdController(req, res) {
    const id = req.params.id;
    try {
        const produto = await produtoServices.findProdutoByIdService(id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function findAllProdutoController(req, res) {
    try {
        const produtos = await produtoServices.findAllProdutosService();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export default {
    createProdutoController,
    findProdutoByIdController,
    findAllProdutoController
}