import {Router} from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

router.get('/', clientsController.index);

router.get('/sobre', clientsController.sobre);

router.get('/contato', clientsController.contato);

router.get('/trabalheconosco', clientsController.trabalheconosco);

router.get('/conteudo', clientsController.conteudo);

router.get('/backend', clientsController.backend);

export default router;