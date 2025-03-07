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

## 🔧 Como Executar o Projeto

### **Pré-requisitos**
- Node.js (v16 ou superior)
- MongoDB (local ou remoto)
- Prisma CLI

### **Passos para Execução**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/FinanceControlProject/Backend
   cd api-financeira

2. **Instale as dependências**
   ```bash
   npm install
   
3. **Configure o ambiente**
   .Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente:
   ```bash
   DATABASE_URL=mongodb+srv://wesleydev:sd46asd85@financeproject.vttwa.mongodb.net/FinanceProject?retryWrites=true&w=majority&appName=FinanceProject
   JWT_SECRET = 48bec4dada39465c0c46d34e58862291d63544fbafdbe216c52e48b8d8965a22

5. **Gere o PrismaClient**
   ```bash
   npx prisma generate

6. **Inicie o servidor**
   ```bash
   node src/server.js

7. **Acesse a API**
   A API estará disponével em
   ```bash
   http://localhost:3000
