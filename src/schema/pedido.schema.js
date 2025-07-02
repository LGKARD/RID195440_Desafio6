import { z } from "zod";

const pedidoSchema = z.object({
    id_cliente: z.number().int().positive('O ID do cliente deve ser um número inteiro positivo'),
    id_produto: z.number().int().positive('O ID do produto deve ser um número inteiro positivo'),
    qtde: z.number().min(1, 'A quantidade deve ser maior que zero')
});

export {pedidoSchema};