# RID195440_Desafio6

API desenvolvida em Node.js com Express e SQLite, como parte do Desafio 6 da Escola DNC. Trata-se de um sistema completo de vendas com controle de clientes, produtos, pedidos, vendas e estoque — utilizando validação com Zod e regras de negócio automatizadas.

---

## 📌 Descrição do Projeto

A aplicação simula um fluxo completo de vendas. Ela permite:

- Cadastro e manutenção de produtos com controle de estoque.
- Cadastro e busca de clientes, inclusive por CPF.
- Criação de pedidos com verificação de estoque.
- Finalização de vendas com geração de data automática.
- Sincronização entre produto e estoque.
- Toda a estrutura segue a arquitetura MVC com separação por **routes**, **controllers**, **services**, **repositories** e **schemas**.

---


## ⚙️ Tecnologias Utilizadas

- **Node.js**: Plataforma de execução JavaScript no backend.
- **Express**: Framework minimalista para construção de APIs.
- **SQLite**: Banco de dados leve e baseado em arquivo.
- **Zod**: Validação de dados de entrada.

---

## 🚀 Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/LGKARD/RID195440_Desafio6.git
```

### 2. Acesse a pasta 

```bash
cd RID195440_Desafio6
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
npm start
ou
npm run dev
```

A aplicação estará disponível em:  
👉 http://localhost:3000

---

## ✅ Funcionalidades

- **Produtos**: CRUD completo com integração ao estoque.
- **Clientes**: CRUD com busca por ID e por CPF.
- **Pedidos**:
  - Criação de pedido com cliente, produto e quantidade.
  - Validação de estoque no momento da reserva.
  - Redução automática do estoque.
- **Vendas**:
  - Geração de venda com base em um pedido.
  - Restrição para um pedido ter apenas uma venda.
  - Registro automático da data da venda.
- **Estoque**:
  - Sincronizado com os produtos.
  - Atualização refletida em ambas as tabelas.

---

## 📦 Exemplo de Requisição

### 🔹 Criação de Cliente (`POST /clientes`)

```json
{
    "nome_cliente": "testecliente",
    "cpf": "12345678989",
    "email": "teste@teste.com",
    "telefone": "3498989898",
    "endereco": "apenas um teste 123"
}
```

### 🔹 Criação de Produto (`POST /produtos`)

```json
{
    "nome_produto": "teste",
    "preco": 30,
    "categoria": "teste",
    "qtde_estoque": 30,
    "descricao": "apenas um teste"
}
```

### 🔹 Criação de Pedido (`POST /pedidos`)

```json
{
  "id_cliente": 1,
  "id_produto": 1,
  "qtde": 2
}
```

> O sistema validará automaticamente se há estoque suficiente para o produto.
> O sistema irá alterar automaticamente as tabelas que referencia o estoque do produto.

### 🔹 Criação de Venda (`POST /vendas`)

```json
{
  "pedido_id": 1
}
```

> O sistema irá registrar a venda apenas se o pedido ainda não tiver sido vendido, e atribuirá a data atual automaticamente.

### 🔹 Atualização Estoque (`PUT /estoque`)

```json
{
    "quantidade": 30
}
```

> O sistema irá alterar automaticamente as tabelas que referencia o estoque do produto.

---

## ⚠️ Observações

- O backend utiliza SQLite, portanto todos os dados ficam salvos localmente no arquivo `database.sqlite`.
- A aplicação segue o padrão MVC e separação clara de responsabilidades.
  
---


## ✍️ Autor

Desenvolvido por LG Kard como parte do curso de Tecnologia da Escola DNC.
