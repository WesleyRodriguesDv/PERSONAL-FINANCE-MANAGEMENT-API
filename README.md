#API GERENCIAMENTO DE FINANÇAS PESSOAIS

##Descriçao
A API foi construída com Node.js, Express, Prisma e MongoDB, seguindo boas práticas de organização de código e arquitetura.

🚀 Funcionalidades

Cadastro de usuários: Criação de novos usuários com email e senha.
![image](https://github.com/user-attachments/assets/3f06edae-afc8-4806-88b4-ddf34fb50d74)

Login de usuários: Autenticação via JWT (JSON Web Token). O usuário também recebe a informação do seu saldo atual, atualizado com as últimas transações realizadas.

![image](https://github.com/user-attachments/assets/b7da3b78-2536-490a-b4e1-5fbc3588037d)

![image](https://github.com/user-attachments/assets/2fb6f6e3-733f-46b1-8930-77158c1cd92e)


Validação de dados: Middleware para garantir que todos os campos obrigatórios sejam fornecidos e que todos os dados estejam consistentes, verificando no banco 
de dados ocorrências como duplicidade.
![image](https://github.com/user-attachments/assets/a9549119-d25e-4d3f-a90c-04c3c9b74624)

![image](https://github.com/user-attachments/assets/6930aa0b-3a81-41b0-8bac-641e353b4004)

![image](https://github.com/user-attachments/assets/c024ec54-896b-4263-96fc-ad882b3314f5)


Transações: Registro de transações com tipo (receita/despesa), categoria, valor e data.
![image](https://github.com/user-attachments/assets/7b26f03a-0e8b-49c8-ab2e-44a7f3c1f9d8)


Listagem de transações: Extrato de todas as transações do usuário.
![image](https://github.com/user-attachments/assets/9393ec22-d135-4ab6-a78d-3db51db33636)


📂 Estrutura do Projeto

![image](https://github.com/user-attachments/assets/c7f6cf61-2ccd-4a96-9549-68ec7949db34)
