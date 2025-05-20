import { Request, Response } from "express";
import { Produto, produtos } from "../models/produto";

let id: number = 0;

export const criarProduto = (req: Request, res: Response) => {
    const {nome, preco } = req.body;

    if ( !nome && !preco) {
        res.status(400).json({ mensagem: "Preencha todos os campos!" });
        return;
    }

    id += 1;

    const novoProduto = new Produto(id, nome, preco);
    produtos.push(novoProduto);
    res.status(201).json({ mensagem: "Produto criado com sucesso!", produto: novoProduto });
};


export const listarProdutos = (req: Request, res: Response) => {
    res.status(200).json(produtos);
};


export const buscarProdutoPorId = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        res.status(404).json({ mensagem: "Produto não encontrado" });
        return;
    }

    res.status(200).json(produto);
};


export const atualizarProduto = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nome, preco } = req.body;

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        res.status(404).json({ mensagem: "Produto não encontrado" });
        return;
    }

    if (!nome && preco == null) {
        res.status(400).json({ mensagem: "Preencha ao menos um campo" });
        return;
    }

    produto.nome = nome || produto.nome;
    produto.preco = preco != null ? preco : produto.preco;

    res.status(200).json({ mensagem: "Produto atualizado com sucesso!", produto });
};


export const deletarProduto = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        res.status(404).json({ mensagem: "Produto não encontrado" });
        return;
    }

    produtos.splice(index, 1);
    res.status(200).json({ mensagem: "Produto deletado com sucesso!" });
};
