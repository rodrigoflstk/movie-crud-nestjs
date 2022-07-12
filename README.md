# movie-api-restful

Esse projeto é uma simples aplicação que promove uma API RESTful, que representa um CRUD de catálogo de filmes.

Para a criação desse projeto, utilizarei as seguintes ferramentas:

- NestJS (pouco tempo de experiência com NestJS).
- TypeORM (1 ano de experiência com TypeORM).
- Typescript (1 ano de experiência).
- Swagger (1 ano de experiência).

**RF** -> Requisitos funcionais -> funcionalidades que nossa aplicação podera ter
**RNF** -> Requisitos não funcionais -> requisitos que não estão ligados diretamente com nossa aplicação
**RN** -> Regras de negócios -> as regras para que os requisitos funcionais funcionem

# Criação dos filmes

**RF**

- Deve ser possível cadastrar um novo filme.

**RN**

- Não deve ser possível cadastrar filmes iguais.

# Listagem dos filmes

**RF**

- Deve ser possível listar todos os filmes.
- Deve ser possível ver um filme pelo seu ID.

**RN**

- Não deve ser possível listar um filme por um ID inexistente.

# Atualização dos filmes

**RF**

- Deve ser possível Atualizar um filme pelo seu ID.

**RN**

- Não deve ser possível atualizar um filme por um ID inexistente.

# Remoção dos filmes

**RF**

- Deve ser possível remover um filme pelo seu ID.

**RN**

- Não deve ser possível remover um filme por um ID inexistente.
