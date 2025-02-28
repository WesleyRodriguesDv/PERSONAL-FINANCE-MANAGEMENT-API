
import jwt from "jsonwebtoken" 
import bcrypt from "bcrypt"
import { criarUsuario, buscarUsuarioEmail } from "../models/userModels.js"
import { obterSaldo } from "../models/transactionModel.js"

export const cadastrarUsuario = async (req, res) =>{
  const {email, senha} = req.body

  const usuarioExistente = await buscarUsuarioEmail(email)
  if (usuarioExistente) {
    return res.status(400).json({erro: "email já cadastrado"})
  }

  const senhaCriptografada = await bcrypt.hash(senha, 15)
  const novoUsuario = await criarUsuario({email, senha: senhaCriptografada})
  res.status(201).json({message: "usuário criado com sucesso! "})
}

export const loginUsuario = async (req,res) =>{
  const {email, senha} = req.body

  const usuario = await buscarUsuarioEmail(email)
  if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
    return res.status(400).json({erro: "email ou senha incorretos"})
  }

  const token = jwt.sign({id: usuario.id}, process.env.JWT_SECRET, {expiresIn: "1h"})
  const saldo = await obterSaldo(usuario.id)
  res.status(201).json({token, saldo})
  
}






