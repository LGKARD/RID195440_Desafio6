import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_produto TEXT UNIQUE NOT NULL,
    preco REAL NOT NULL,
    categoria TEXT,
    qtde_estoque INTEGER,
    descricao TEXT
)`);

function createProdutoRepository(newProduto) {
    return new Promise((resolve, reject) => {
        const { nome_produto, preco, categoria, qtde_estoque, descricao } = newProduto;
        db.run(`INSERT INTO produtos (nome_produto, preco, categoria, qtde_estoque, descricao) VALUES (?, ?, ?, ?, ?)`,
            [nome_produto, preco, categoria, qtde_estoque, descricao],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...newProduto });
                }
            });
    });
}

function findProdutoByNameRepository(nome_produto) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM produtos WHERE nome_produto = ?`, [nome_produto], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function findProdutoByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM produtos WHERE id = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function findAllProdutosRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM produtos`, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function updateProdutoRepository(id, newProduto) {
    return new Promise((resolve, reject) => {
        const { nome_produto, preco, categoria, qtde_estoque, descricao } = newProduto;
        db.run(`UPDATE produtos SET nome_produto = ?, preco = ?, categoria = ?, qtde_estoque = ?, descricao = ? WHERE id = ?`,
            [nome_produto, preco, categoria, qtde_estoque, descricao, id],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, ...newProduto });
                }
            });
    });
}

function deleteProdutoRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM produtos WHERE id = ?`, [id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message : "Produto excluído com sucesso", id });
            }
        });
    });
}

export default {
    createProdutoRepository,
    findProdutoByNameRepository,
    findProdutoByIdRepository,
    findAllProdutosRepository,
    updateProdutoRepository,
    deleteProdutoRepository
}
