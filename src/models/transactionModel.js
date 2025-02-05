import prisma from "../config/prismaClient.js";

export const criarTransacao = async (dados) => {
  return await prisma.transacao.create({ data: dados });
};

export const listarTransacoesUsuario = async (usuarioId) => {
  return await prisma.transacao.findMany({ where: { usuarioId } });
};
