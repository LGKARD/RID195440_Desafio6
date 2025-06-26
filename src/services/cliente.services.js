import clienteRepository from "../repositories/cliente.repositories.js";

async function createClienteService(newCliente) {
    const foundCliente = await clienteRepository.findClienteByCpfRepository(newCliente.cpf);
    if (foundCliente) throw new Error("CPF já cadastrado");
    const cliente = await clienteRepository.createClienteRepository(newCliente);
    return cliente;
}

async function findAllClientesService() {
    const clientes = await clienteRepository.findAllClientesRepository();
    return clientes;
}

async function findClienteByIdService(id) {
    const cliente = await clienteRepository.findClienteByIdRepository(id);
    if (!cliente) throw new Error("Cliente não encontrado");
    return cliente;
}

async function findClienteByCpfService(cpf) {
    const cliente = await clienteRepository.findClienteByCpfRepository(cpf);
    if (!cliente) throw new Error("Cliente não encontrado");
    return cliente;
}

async function updateClienteService(id, newCliente) {
    const foundCliente = await clienteRepository.findClienteByIdRepository(id);
    if (!foundCliente) throw new Error("Cliente não encontrado");
    const cliente = await clienteRepository.updateClienteRepository(id, newCliente);
    return cliente;
}

async function deleteClienteService(id) {
    const foundCliente = await clienteRepository.findClienteByIdRepository(id);
    if (!foundCliente) throw new Error("Cliente não encontrado");
    const { message } = await clienteRepository.deleteClienteRepository(id);
    return message;
}

export default {
    createClienteService,
    findAllClientesService,
    findClienteByIdService,
    findClienteByCpfService,
    updateClienteService,
    deleteClienteService
};