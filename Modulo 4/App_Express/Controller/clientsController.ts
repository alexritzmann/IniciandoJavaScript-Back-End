import { Request, Response} from "express";

function index(req: Request, res: Response, next: any)
{
    res.render("index");
}

function backend(req: Request, res: Response, next: any)
{
    res.render("backend");
}

function contato(req: Request, res: Response, next: any)
{
    res.render("contato");
}

function sobre(req: Request, res: Response, next: any)
{
    res.render("sobre");
}

function conteudo(req: Request, res: Response, next: any)
{
    res.render("conteudo");
}

function trabalheconosco(req: Request, res: Response, next: any)
{
    res.render("trabalheconosco");
}

export default {index, backend, contato, sobre, conteudo, trabalheconosco};