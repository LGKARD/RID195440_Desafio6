import estoqueServices from "../services/estoque.services.js";

async function findEstoqueByProdutoIdController(req, res) {
    const { id } = req.params;
    try {
        const estoque = await estoqueServices.findEstoqueByProdutoIdService(id);
        return res.status(200).json(estoque);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function updateEstoqueController(req, res) {
    const { id } = req.params;
    const { quantidade } = req.body;
    try {
        const estoque = await estoqueServices.updateEstoqueService(id, {quantidade});
        return res.status(200).json(estoque);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export default { findEstoqueByProdutoIdController, updateEstoqueController };