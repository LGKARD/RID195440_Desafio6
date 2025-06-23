import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT UNIQUE NOT NULL,
    preco REAL NOT NULL,
    categoria TEXT,
    qtde_estoque INTEGER,
    descricao TEXT
)`);

function createProdutoRepository(newProduto) {
    return new Promise((resolve, reject) => {
        const { nome_produto, preco, categoria, qtde_estoque, descricao } = newProduto;
        db.run(`INSERT INTO produtos (nome, preco, categoria, qtde_estoque, descricao) VALUES (?, ?, ?, ?, ?)`,
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


export default {
    createProdutoRepository
}