import { z } from "zod";

const produtoSchema = z.object({
    nome_produto: z.string().min(3, 'O nome do produto deve ter no mínimo 3 caracteres').max(255, 'O nome do produto deve ter no máximo 255 caracteres'),
    preco: z.number().min(0, 'O preço deve ser maior que zero').max(100000),
    categoria: z.string().min(3, 'A categoria deve ter no mínimo 3 caracteres').max(255, 'A categoria deve ter no máximo 255 caracteres').optional(),
    qtde_estoque: z.number().min(0, 'A quantidade em estoque deve ser maior que zero').optional(),
    descricao: z.string().min(3, 'A descrição deve ter no mínimo 3 caracteres').max(255, 'A descrição deve ter no máximo 255 caracteres').optional()
});

const produtoIdSchema = z.object({ id: z.number().int().positive('O ID do produto deve ser um número inteiro positivo') });

export {produtoSchema, produtoIdSchema};
