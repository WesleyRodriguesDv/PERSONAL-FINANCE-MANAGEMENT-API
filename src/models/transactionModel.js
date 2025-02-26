import prisma from "../config/prismaClient.js";

export const criarTransacao = async (dados) => {
  return await prisma.transacao.create({ data: dados });
};

export const listarTransacoesUsuario = async (usuarioId) => {
  return await prisma.transacao.findMany({ where: { usuarioId } });
};

export const saldo = async (usuarioId) =>{
  const transacoes = await prisma.transacao.findMany({
    where: {usuarioId},
    select: {valor:true}
  })

  const saldo = transacoes.reduce((total, transacao) => total + transacao.valor, 0)
  return saldo;
}