# API DE GERENCIAMENTO DE FINANÇAS PESSOAIS

## 📄 Descriçao
A API serve como um gerenciador financeiro onde é possível adicionar receitas e despesas. A partir desses dados, temos o saldo atual, extrato de todas as transações com visualização das mais recentes primeiro. Para acessar, o usuário deve criar um cadastro e fazer login.

## 📳 Funcionalidades

### Cadastro e Login
O cadastro de usuários passa por uma validação de consistência dos dados, seguido por uma verificação no banco de dados afim de evitar dados já existentes ou duplicidade.

Após o cadastro bem sucedido, o usuário está apto à fazer login. Novamente os dados inseridos passam por uma validação de consistência e existência, retornando a todo momento possíveis erros. 
Assim que o login é autorizado, o usuário recebe um token de autenticação via JWT (JsonWebToken). Esse mesmo token é verificado para acessar rotas privadas como efetuar transações e visualizar dados sensíveis.

### 🪙 Trasações
As transações são estruturadas com tipo, categoria, valor e descrição, sendo este último não obrigatório. O tipo é obrigatoriamente "Receita" ou "Despesa".
```bash
Exemplo de uma Transação: 

tipo: Despesa
categoria: Entretenimento 
valor: -R$ 60,00
descrição: McDonald's 
```
