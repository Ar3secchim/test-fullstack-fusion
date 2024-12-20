# Teste Técnico Full Stack Fusion

## Getting Started

1. Primeiro clona o projeto
2. Instalar as dependencias do projeto rodando o comando a seguir:

```bash
  npm run install
  # or
  yarn install
```

3. Subir um container docker rodando o comando a seguir:

```bash
  npm run infra
  # or
  yarn infra
```

4. Subir a servidor API e servidor WEB rodando o comando a seguir:

```bash
  npm run dev
  # or
  yarn dev
```

## Requisitos do Projeto

### Frontend (React + TypeScript)

**Página Principal:**

- [x] Exibe a lista de heróis.
- [x] Permite a criação de um novo herói.
- [x] Permite a atualização de heróis existentes.
- [x] Permite a exclusão de heróis.

**Componentes Necessários:**

- [x] `HeroList`: Componente que exibe a lista de heróis.
- [x] `HeroItem`: Componente que representa um herói individual com opções de editar e excluir.
- [x] `HeroForm`: Componente para criar e editar heróis.

### Backend (Node + NestJS + TypeScript + Banco de Dados Relacional ou Não Relacional)

**Rotas para CRUD de Heróis:**

- [x] **Criar Herói**
  - **Endpoint:** `/heroes`
  - **Método:** POST
  - **Descrição:** Cria um novo herói. Os dados do herói (nome, habilidades, e origem) devem ser enviados no corpo da requisição. O cadastro deve ser predefinido a heróis que já existem no universo Marvel.

- [x] **Listar Heróis**
  - **Endpoint:** `/heroes`
  - **Método:** GET
  - **Descrição:** Retorna a lista de todos os heróis.

- [x] **Atualizar Herói**
  - **Endpoint:** `/heroes/:id`
  - **Método:** PUT
  - **Descrição:** Atualiza um herói existente com base no ID. Os novos dados do herói (nome, habilidades, e origem) devem ser enviados no corpo da requisição.

- [x] **Excluir Herói**
  - **Endpoint:** `/heroes/:id`
  - **Método:** DELETE
  - **Descrição:** Exclui um herói existente com base no ID.

## Requisitos Técnicos

**Frontend:**

- [x] Utilizar React com TypeScript.
- [x] Utilizar Axios ou Fetch para fazer requisições HTTP ao backend.
- [x] Gerenciar o estado da aplicação utilizando o contexto do React ou uma biblioteca de gerenciamento de estado como Redux ou Zustand.
  - Por atualmente estou estudando mais fundo sobre gerenciamento de estados optei por construir uma store - um repositório centralizado de estado da aplicação - personalizada para poder mais simples de entender e usar, especialmente para projetos menores.
- [ ] Uso do SWR será considerado uma habilidade valorizada.

**Backend:**

- [x] Utilizar NestJS com TypeScript.
- [x] Utilizar um banco de dados relacional ou não relacional (ex. MongoDB, PostgreSQL, MySQL).
- [x] Implementar as operações CRUD (Create, Read, Update, Delete) para gerenciar os heróis.

## Critérios de Avaliação

- Funcionamento correto das operações CRUD no frontend e backend.
- Qualidade e clareza do código.
- Organização do projeto e estrutura de pastas.
- Documentação das rotas e como utilizá-las.
- Interface do usuário e experiência do usuário (UI/UX).

## Screnshot

https://github.com/user-attachments/assets/79a74dcd-1f2e-495e-8185-bc3d3f142533


