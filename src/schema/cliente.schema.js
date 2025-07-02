import { z } from "zod";

const clienteSchema = z.object({
    nome_cliente: z.string().min(3, 'O nome do cliente deve ter no mínimo 3 caracteres').max(255, 'O nome do cliente deve ter no máximo 255 caracteres'),
    cpf: z.string().min(11, 'O CPF deve ter no mínimo 11 caracteres').max(11, 'O CPF deve ter no máximo 11 caracteres'),
    email: z.string().email('O email deve ser válido'),
    telefone: z.string().min(10, 'O telefone deve ter no mínimo 10 caracteres').max(11, 'O telefone deve ter no máximo 11 caracteres').optional(),
    endereco: z.string().min(3, 'O endereço deve ter no mínimo 3 caracteres').max(255, 'O endereço deve ter no máximo 255 caracteres').optional()
});

export {clienteSchema};