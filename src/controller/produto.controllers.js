import produtoServices from "../services/produto.services.js";


async function createProdutoController(req, res) {
    const newProduto = req.body;
    try {
        const produto = await produtoServices.createProdutoService(newProduto);
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default {
    createProdutoController
}