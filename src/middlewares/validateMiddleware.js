import { criarTransacao } from "../models/transactionModel.js";

export const validarCadastro = (req, res, next) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(401).json({ erro: "Todos os campos são obrigatórios" });
  }
  next();
};

export const validarLogin = (req, res, next) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(401).json({ erro: "Por favor insira um email e uma senha" });
  }
  next();
};

export const validarTransacao = (req, res, next) => {
  const { tipo, categoria, valor } = req.body;
  if (!tipo || !categoria || !valor) {
    return res.status(401).json({ erro: "Todos os campos são obrigatórios" });
  }

  if (tipo !== "receita" && tipo !== "despesa") {
    return res.status(401).json({ erro: "Tipo deve ser 'receita' ou 'despesa'." });
  }
  next();
};


export const adicionarTransacao = async (req, res) =>{
  const {tipo, categoria, valor, descricao} = req.body

  const usuarioId = req.usuarioId

  const transacao = await criarTransacao({tipo, categoria, valor, descricao, usuarioId})

}

