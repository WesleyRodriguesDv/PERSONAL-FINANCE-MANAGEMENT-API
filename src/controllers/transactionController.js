
import { criarTransacao, listarTransacoesUsuario } from "../models/transactionModel.js";
import { obterSaldo } from "../models/transactionModel.js";


export const adicionarTransacao = async (req, res) =>{
    const {tipo, categoria, valor, descricao} = req.body
    const usuarioId = req.usuarioId
''
    try{
        const transacao = await criarTransacao({tipo, categoria, valor, descricao, usuarioId})
        const saldo = await obterSaldo (usuarioId)
        res.status(201).json({transacao, saldo})
    } catch(error) {
        return res.status(400).json({erro: "Erro ao efetuar transação"})
    }
}


export const listarTransacoes = async (req,res) =>{
    const transacoes = await listarTransacoesUsuario(req.usuarioId)
    res.json({transacoes})
}









































