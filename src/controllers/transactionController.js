import {criarTransacao, listarTransacoesUsuario} from '../models/transactionModel.js'

export const adicionarTransacao = async (req,res) =>{
    const{tipo, categoria, valor} = req.body

    const usuarioId = req.usuarioId

    const transacao = await criarTransacao({tipo, categoria, valor, usuarioId});

    res.status(201).json(transacao)
};

export const listarTransacoes = async (req,res) =>{
    const transacoes = await listarTransacoesUsuario(req.usuarioId);
    res.json(transacoes)
};

