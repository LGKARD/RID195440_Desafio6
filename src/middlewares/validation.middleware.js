import { produtoIdSchema } from "../schema/produto.schema.js";

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

const validateProdutoId = (req, res, next) => {
    try {
        const id = +req.params.id;
        produtoIdSchema.parse({ id });
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export {validate, validateProdutoId};