import db from "../config/database.js";

function findEstoqueByProdutoIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM estoque WHERE id_produto = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function updateEstoqueRepository(id_produto, newEstoque) {
    return new Promise((resolve, reject) => {
        const { quantidade } = newEstoque;
        db.run(`UPDATE estoque SET quantidade = ? WHERE id_produto = ?`, [quantidade, id_produto], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id_produto, ...newEstoque });
            }
        });
    });
}

export default { findEstoqueByProdutoIdRepository, updateEstoqueRepository };