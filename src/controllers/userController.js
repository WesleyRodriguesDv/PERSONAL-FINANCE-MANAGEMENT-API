import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { criarUsuario, buscarUsuarioEmail } from "../models/userModels.js";

export const cadastrarUsuario = async (req, res) => {
  const { email, senha } = req.body;

  const usuarioExiste = await buscarUsuarioEmail(email);
  if (usuarioExiste) {
    return res.status(400).json({ erro: "Email já cadastrado." });
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10);
  const novoUsuario = await criarUsuario({ email, senha: senhaCriptografada });
  res.status.json({ message: "Usuário casdastrado com sucesso." });
};

export const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await buscarUsuarioEmail(email);
  if ((!usuario, !(await bcrypt.compare(senha, usuario.email)))) {
    return res.status(401).json({ erro: "Credenciais inválidas" });
  }

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {expiresIn: "1h"});

  res.json({ token });
};