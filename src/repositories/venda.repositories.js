import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS vendas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pedido_id INTEGER NOT NULL,
    data_venda TEXT NOT NULL,
    valor_total REAL NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id)
)`);

function createVendaRepository(newVenda) {
    return new Promise((resolve, reject) => {
        const { pedido_id, data_venda, valor_total } = newVenda;
        db.run(`INSERT INTO vendas (pedido_id, data_venda, valor_total) VALUES (?, ?, ?)`,
            [pedido_id, data_venda, valor_total],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...newVenda });
                }
            });
    });
}

function findVendaByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM vendas WHERE id = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function findAllVendasRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM vendas`, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function updateVendaRepository(id, newVenda) {
    return new Promise((resolve, reject) => {
        const { pedido_id, data_venda, valor_total } = newVenda;
        db.run(`UPDATE vendas SET pedido_id = ?, data_venda = ?, valor_total = ? WHERE id = ?`,
            [pedido_id, data_venda, valor_total, id],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, ...newVenda });
                }
            });
    });
}

function deleteVendaRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM vendas WHERE id = ?`, [id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: "Venda excluída com sucesso", id });
            }
        });
    });
}

export default { createVendaRepository, findVendaByIdRepository, findAllVendasRepository, updateVendaRepository, deleteVendaRepository };

