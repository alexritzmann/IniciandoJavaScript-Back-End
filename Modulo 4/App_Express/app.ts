import express from "express";
import clientsRouter from "./Router/clients";

const app = express();
app.use(clientsRouter);
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
