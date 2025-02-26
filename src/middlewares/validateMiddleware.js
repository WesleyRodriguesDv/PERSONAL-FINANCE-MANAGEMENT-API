export const validarCadastro = (req, res, next) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }
  next();
};

export const validarTransacao = (req, res, next) => {
  const { tipo, categoria, valor } = req.body;
  if (!tipo || !categoria || !valor) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  if (tipo !== "receita" && tipo !== "despesa") {
    return res.status(400).json({ erro: "Tipo deve ser 'receita' ou 'despesa'." });
  }
  next();
};


