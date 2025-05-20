/*import express, { Application } from "express";
import usuarioRoutes from "./routes/usuarioRouter";

const app: Application = express();
app.use(express.json());


app.use('/api', usuarioRoutes);

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
});
*/

import express, { Application } from "express";
import produtoRoutes from "./routes/produtoRoutes"; 

const app: Application = express();
app.use(express.json());

app.use('/api', produtoRoutes); 

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});
