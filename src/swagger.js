
    const swaggerDocs = {
  openapi: "3.0.1",
  info: {
    title: "API de gerenciamento de finanças pessoais",
    description: "Essa API tem como objetivo gerenciar receitas e despesas",
    contact: {
      email: "wesleyrodriiguesdev@gmail.com"
    },
    version: "1.0.0"
  },
  paths: {
    "/cadastro": {
      post: {
        summary: "Cadastro de usuário",
        description: "Essa rota é responsável por cadastrar um novo usuário",
        tags: ["Cadastro"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cadastro"
              },
              examples: {
                cadastro: {
                  summary: "Exemplo de cadastro",
                  value: {
                    email: "string",
                    senha: "string"
                  }
                }
              }
            }
          }
        },
        responses: {
          401: {
            description: "Erro ao cadastrar usuário. Possíveis motivos: Email já cadastrado ou campos obrigatórios não preenchidos.",
            content: {
              "application/json": {
                examples: {
                  emailJaCadastrado: {
                    summary: "Email já cadastrado",
                    value: {
                      erro: "email já cadastrado"
                    }
                  },
                  camposObrigatorios: {
                    summary: "Campos Obrigatórios",
                    value: {
                      erro: "Todos os campos são obrigatórios"
                    }
                  }
                }
              }
            }
          },
          201: {
            description: "Usuário cadastrado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Cadastro"
                },
                example: {
                  message: "usuário criado com sucesso! "
                }
              }
            }
          }
        }
      }
    },
    "/login": {
      post: {
        summary: "Login do usuário",
        description: "Essa rota é responsável pelo login e autenticação do usuário",
        tags: ["Login"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login"
              },
              examples: {
                login: {
                  summary: "Exemplo de Login",
                  value: {
                    email: "string",
                    senha: "string"
                  }
                }
              }
            }
          }
        },
        responses: {
          401: {
            description: "Email ou senha incorretos",
            content: {
              "application/json": {
                examples: {
                  dadosIncorretos: {
                    summary: "Email ou senha incorretos",
                    value: {
                      erro: "email ou senha incorretos"
                    }
                  }
                }
              }
            }
          },
          201: {
            description: "Login realizado com sucesso"
          }
        }
      }
    },
    "/transacoes": {
      post: {
        summary: "Registrar Transações",
        description: "Essa rota é responsável por realizar transações de receitas e despesas",
        tags: ["Transacoes"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Transacao"
              },
              examples: {
                transacao: {
                  summary: "Exemplo de Transação",
                  value: {
                    tipo: "despesa",
                    categoria: "Lazer",
                    descricao: "McDonald's",
                    valor: -60
                  }
                }
              }
            }
          }
        },
        responses: {
          401: {
            description: "Token inválido, não fornecido ou expirado",
            content: {
              "application/json": {
                examples: {
                  tokenInválido: {
                    summary: "Token inválido, não fornecido ou expirado",
                    value: {
                      erro: "Acesso negado, token não fornecido"
                    }
                  },
                  tokenExpirado: {
                    summary: "Token inválido ou expirado",
                    value: {
                      erro: "Token inválido ou expirado"
                    }
                  }
                }
              }
            }
          },
          201: {
            description: "Transação registrada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Transacao"
                },
                example: {
                  message: "Transação confirmada!"
                }
              }
            }
          }
        }
      }
    },
    "/listar-transacoes": {
      get: {
        summary: "Extrato de transações",
        description: "Essa rota é responsável por exibir o extrato de transações do usuário",
        tags: ["Registro de transações"],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "usuarioId",
            in: "query",
            description: "Id do usuário",
            required: true,
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          200: {
            description: "Extrato exibido com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Transacao"
                  }
                },
                example: [
                  {
                    id: "id_da_transacao",
                    usuarioId: "id_do_usuario",
                    tipo: "despesa",
                    categoria: "Lazer",
                    descricao: "McDonald's",
                    valor: -60,
                    data: "2023-11-22T10:00:00Z"
                  },
                  {
                    id: "id_da_transacao_2",
                    usuarioId: "id_do_usuario",
                    tipo: "receita",
                    categoria: "Salario",
                    descricao: "Salario mes de Novembro",
                    valor: 3000,
                    data: "2023-11-23T10:00:00Z"
                  }
                ]
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Cadastro: {
        type: "object",
        properties: {
          email: { type: "string" },
          senha: { type: "string" }
        }
      },
      Login: {
        type: "object",
        properties: {
          email: { type: "string" },
          senha: { type: "string" }
        }
      },
      Transacao: {
        type: "object",
        properties: {
          id: { type: "string" },
          usuarioId: { type: "string" },
          tipo: { type: "string" },
          categoria: { type: "string" },
          descricao: { type: "string" },
          valor: { type: "number", format: "float" },
          data: { type: "string", format: "date-time" }
        }
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
}
export default swaggerDocs;

