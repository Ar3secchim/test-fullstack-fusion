# Documentação da API e Aplicação

Este arquivo contém as definições de rotas e configurações de nível de aplicação para a API.

## Rotas

### GET /heroes

- **Descrição**: Recupera uma lista de heróis.
- **Resposta**: Array JSON de objetos de herói.

### POST /heroes

- **Descrição**: Cria um novo herói.
- **Corpo da Requisição**: Objeto JSON contendo detalhes do herói.
- **Resposta**: Objeto JSON do herói criado.

### GET /heroes/:id

- **Descrição**: Recupera um herói pelo ID.
- **Parâmetros**:
  - `id` (string): O ID do herói a ser recuperado.
- **Resposta**: Objeto JSON do herói.

### PUT /heroes/:id

- **Descrição**: Atualiza um herói pelo ID.
- **Parâmetros**:
  - `id` (string): O ID do herói a ser atualizado.
- **Corpo da Requisição**: Objeto JSON contendo detalhes atualizados do herói.
- **Resposta**: Objeto JSON do herói atualizado.

### DELETE /users/:id

- **Descrição**: Deleta um herói pelo ID.
- **Parâmetros**:
  - `id` (string): O ID do herói a ser deletado.
- **Resposta**: Mensagem de status indicando sucesso ou falha.

## Aplicação

A aplicação está configurada para lidar com requisições e respostas JSON, e inclui middleware de tratamento de erros para gerenciar quaisquer erros inesperados que ocorram durante o processamento das requisições.

### Middleware

- `bodyParser.json()`: Analisa os corpos das requisições em um middleware antes dos seus manipuladores, disponível na propriedade `req.body`.
- `errorHandler`: Middleware personalizado de tratamento de erros para capturar e responder a erros.

### Tratamento de Erros

- A aplicação inclui um manipulador global de erros que captura todos os erros não tratados e responde com uma mensagem de erro padronizada.

### Configuração de Ambiente

- A aplicação usa variáveis de ambiente para configurar definições como o número da porta e strings de conexão ao banco de dados.
