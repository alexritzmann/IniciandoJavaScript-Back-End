import {Router} from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("Rota Inicial");
})

router.get('/sobre', (req, res) => {
    res.send("falando sobre mim!");
})

router.get('/contato', (req, res) => {
    res.send("Contato");
})

router.get('/trablheconosco', (req, res) => {
    res.send("<h1>Trabalhe Conosco</h1>");
})

router.get('/conteudo', (req, res) => {
    res.send("<p>Conteúdo do site</p>");
})

router.get('/backend', (req, res) => {
    res.send("<h1>Rota Back End</h1>");
})

export default router;