
# API DE GERENCIAMENTO DE FINANÇAS PESSOAIS

## 📄 Descriçao
A API serve como um gerenciador financeiro onde é possível adicionar receitas e despesas. A partir desses dados, temos o saldo atual, extrato de todas as transações com visualização das mais recentes primeiro. Para acessar, o usuário deve criar um cadastro e fazer login.

## 🚀 Funcionalidades

   - 👤 Cadastro <br>
     O cadastro de usuários passa por uma validação de consistência dos dados, seguido por uma verificação no banco de dados afim de evitar dados já existentes ou duplicidade.
   
   - ✅👤 Login <br>
      Após o cadastro bem sucedido, o usuário está apto à fazer login. Novamente os dados inseridos passam por uma validação de consistência e existência, retornando a todo momento possíveis erros.Assim que o login é autorizado, o usuário é autenticado via JWT. O saldo atual do usuário é exibido após o login, se não houver transações o saldo é zero.

   - 💰 Trasações <br>
      As transações são estruturadas com tipo, categoria, valor e descrição, sendo este último não obrigatório. O tipo é obrigatoriamente "Receita" ou "Despesa".

      - Ex: 
         ```bash
         tipo: Despesa
         categoria: Entretenimento 
         valor: R$ -60,00
         descrição: McDonald's 
         ```
   - 🧾 Extrato e Saldo <br>
      O usuário tem a opção de visualizar o extrato de transações efetuadas bem como o saldo atual. Para ter acesso ao Extrato o sistema busca o usuarioId do usuário já autenticado e consulta no banco de dados as transações efetuadas pelo mesmo.

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
   
3. **Configure o ambiente** <br>
- Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente:
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
- A API estará disponével em
   ```bash
   http://localhost:3000

---

## Methods & Endpoints API
```bash
POST /cadastro - Cria um novo usuário
POST /login - Efetua login e autentica o usuário
POST /transacoes - Adiciona uma transação de receita ou despesa
GET /listar-transacoes - Acessa o extrato das transações
```



   
  


