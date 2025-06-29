import express from "express";
import produtoRoutes from "./src/routes/produto.routes.js";
import clienteRoutes from "./src/routes/cliente.routes.js";
import pedidoRoutes from "./src/routes/pedido.routes.js";
import vendaRoutes from "./src/routes/vendas.routes.js";

const app = express();
app.use(express.json());

app.use(produtoRoutes);
app.use(clienteRoutes);
app.use(pedidoRoutes);
app.use(vendaRoutes);






app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});