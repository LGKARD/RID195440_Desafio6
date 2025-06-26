import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_cliente TEXT NOT NULL,
    cpf TEXT UNIQUE NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    endereco TEXT
)`);

function createClienteRepository(newCliente) {
    return new Promise((resolve, reject) => {
        const { nome_cliente, cpf, email, telefone, endereco } = newCliente;
        db.run(`INSERT INTO clientes (nome_cliente, cpf, email, telefone, endereco) VALUES (?, ?, ?, ?, ?)`,
            [nome_cliente, cpf, email, telefone, endereco],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...newCliente });
                }
            });
    });
}

function findClienteByCpfRepository(cpf) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM clientes WHERE cpf = ?`, [cpf], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function findClienteByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM clientes WHERE id = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function findAllClientesRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM clientes`, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function updateClienteRepository(id, newCliente) {
    return new Promise((resolve, reject) => {
        const { nome_cliente, cpf, email, telefone, endereco } = newCliente;
        db.run(`UPDATE clientes SET nome_cliente = ?, cpf = ?, email = ?, telefone = ?, endereco = ? WHERE id = ?`,
            [nome_cliente, cpf, email, telefone, endereco, id],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, ...newCliente });
                }
            });
    });
}

function deleteClienteRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM clientes WHERE id = ?`, [id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: "Cliente excluído com sucesso", id });
            }
        });
    });
}



export default {
    createClienteRepository,
    findClienteByCpfRepository,
    findClienteByIdRepository,
    findAllClientesRepository,
    updateClienteRepository,
    deleteClienteRepository
}