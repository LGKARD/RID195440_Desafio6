import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_cliente INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    qtde INTEGER NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_produto) REFERENCES produtos(id)
)`);

function createPedidoRepository(newPedido) {
    return new Promise((resolve, reject) => {
        const { id_cliente, id_produto, qtde } = newPedido;
        db.run(`INSERT INTO pedidos (id_cliente, id_produto, qtde) VALUES (?, ?, ?)`,
            [id_cliente, id_produto, qtde],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...newPedido });
                }
            });
    });
}

function findPedidoByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM pedidos WHERE id = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function findAllPedidosRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM pedidos`, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function updatePedidoRepository(id, newPedido) {
    return new Promise((resolve, reject) => {
        const { id_cliente, id_produto, qtde } = newPedido;
        db.run(`UPDATE pedidos SET id_cliente = ?, id_produto = ?, qtde = ? WHERE id = ?`,
            [id_cliente, id_produto, qtde, id],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, ...newPedido });
                }
            });
    });
}

function deletePedidoRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM pedidos WHERE id = ?`, [id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: "Pedido excluído com sucesso", id });
            }
        });
    });
}

export default { createPedidoRepository, findPedidoByIdRepository, findAllPedidosRepository, updatePedidoRepository, deletePedidoRepository };