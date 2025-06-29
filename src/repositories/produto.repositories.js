import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_produto TEXT UNIQUE NOT NULL,
    preco REAL NOT NULL,
    categoria TEXT,
    qtde_estoque INTEGER,
    descricao TEXT
)`);
db.run(`CREATE TABLE IF NOT EXISTS estoque (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_produto INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES produtos(id) ON DELETE CASCADE
)`);


function createProdutoRepository(newProduto) {
    return new Promise((resolve, reject) => {
        const { nome_produto, preco, categoria, qtde_estoque, descricao } = newProduto;
        db.run(`INSERT INTO produtos (nome_produto, preco, categoria, descricao) VALUES (?, ?, ?, ?)`,
            [nome_produto, preco, categoria, descricao],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    const produtoId = this.lastID;

                    db.run(`INSERT INTO estoque (id_produto, quantidade) VALUES (?, ?)`,
                        [produtoId, qtde_estoque],
                        function (err2) {
                            if (err2) {
                                reject(err2);
                            } else {
                                resolve({
                                    id: produtoId,
                                    nome_produto,
                                    preco,
                                    categoria,
                                    descricao,
                                    qtde_estoque
                                });
                            }
                        }
                    );
                }
            }
        );
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
        db.get(`SELECT p.*, e.quantidade as qtde_estoque
                FROM produtos p
                LEFT JOIN estoque e ON p.id = e.id_produto
                WHERE p.id = ?`,
            [id],
            (err, row) => {
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
        db.all(`SELECT p.*, e.quantidade as qtde_estoque 
                FROM produtos p
                LEFT JOIN estoque e ON p.id = e.id_produto`, [], (err, rows) => {
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

        db.run(`UPDATE produtos SET nome_produto = ?, preco = ?, categoria = ?, descricao = ? WHERE id = ?`,
            [nome_produto, preco, categoria, descricao, id],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    db.run(`UPDATE estoque SET quantidade = ? WHERE id_produto = ?`,
                        [qtde_estoque, id],
                        function (err2) {
                            if (err2) {
                                reject(err2);
                            } else {
                                resolve({ id, ...newProduto });
                            }
                        }
                    );
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
