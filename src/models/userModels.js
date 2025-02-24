import prisma from "../config/prismaClient.js";

export const criarUsuario = async (dados) => {
  return await prisma.usuario.create({ data: dados });
};

export const buscarUsuarioEmail = async (email) => {
  return await prisma.usuario.findUnique({ where: { email } });
};

