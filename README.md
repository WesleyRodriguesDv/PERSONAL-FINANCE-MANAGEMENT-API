# API DE GERENCIAMENTO DE FINANÇAS PESSOAIS

## Funcionalidades e como utilizar a API de Gerenciamento de Finanças Pessoais. A API foi desenvolvida com **Node.js**, **Express**, **Prisma** e **MongoDB**, seguindo boas práticas de organização e segurança.

---

## 🚀 Visão Geral

A API permite que usuários gerenciem suas finanças pessoais, incluindo:

- **Cadastro e autenticação de usuários**.
- **Registro de transações** (receitas e despesas).
- **Consulta de extrato financeiro**.
- **Validação de dados** para garantir consistência e segurança.

---

## 📂 Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a manutenção e escalabilidade:
/api-financeira
│
├── /prisma
│   └── schema.prisma         # Configuração do Prisma
│
├── /src
│   ├── /config
│   │   └── prismaClient.js   # Conexão com o Prisma
│   │
│   ├── /middlewares
│   │   ├── authMiddleware.js   # Middleware para autenticação JWT
│   │   └── validateMiddleware.js # Middleware para validação de dados
│   │
│   ├── /models
│   │   ├── userModel.js        # Métodos para usuário
│   │   └── transactionModel.js # Métodos para transações
│   │
│   ├── /controllers
│   │   ├── userController.js      # Cadastro e login
│   │   └── transactionController.js # Gerenciamento de transações
│   │
│   ├── /routes
│   │   ├── /public
│   │   │   └── userRoutes.js      # Rotas públicas (cadastro/login)
│   │   │
│   │   └── /private
│   │       └── transactionRoutes.js # Rotas privadas (transações)
│   │
│   ├── app.js                # Configuração do Express
│   └── server.js             # Inicialização do servidor
│
├── .env                      # Variáveis de ambiente
├── package.json              # Dependências do projeto
└── README.md                 # Documentação do projeto

