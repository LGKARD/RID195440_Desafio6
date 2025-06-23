import express from "express";
import produtoRoutes from "./src/routes/produto.routes.js";

const app = express();
app.use(express.json());

app.use(produtoRoutes);






app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});