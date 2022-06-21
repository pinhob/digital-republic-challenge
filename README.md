# Republic Paints Cans Calculator: desafio da Digital Republic

Neste repositório está o desafio técnico para a Digital Republic, criado utilizando Node, Express, React e Next.

## Objetivo

> Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.

## Tecnologias utilizadas

- Node.js
- ExpressJS
- React
- Next
- Styled Components
- Jest
- Supertests
- ESLinter
- Concurrently

## Rodando o projeto

### Pré-requisitos:

Para rodar este projeto é necessário que você tenha instalado:

- **Node**, na versão `14.6` ou maior;
- **NPM**, na versão `7.21`ou maior;

### Clonando o repositório

Clone o repositório inserindo os seguintes comandos em seu terminal:

```
git clone URL
cd digital-republic-challenge
```

### Instalando as dependências

Dentro do diretório do projeto, rode em seu terminal o comando para instalar as dependências:

```
npm install
```

Com isso será descarregado o `node_modules` e todas as dependências.

### Rodando o projeto

Execute o projeto com o comando:

```
npm start
```

**Será rodado o Concurrently**, que será responsável por executar em sequência os comandos `cd back-end && npm run dev` e `cd front-end && npm run dev`.

### Rodando os testes

Foi criado o teste de integração da rota `/v1/paints`. Para executar este teste, insira em seu terminal:

```
cd back-end && npm run test
```

Para visualizar o relatório de `code coverage` do diretório `back-end`, insira o comando:

```
npm run coverage
```

A cobertura no momento é de:
<IMAGEM>

## Rotas

Para visualizar as rotas e retornos da API, acesse o README.md do diretório `back-end`.

## Proximos passos

- Criar testes unitários para os diretórios `front-end` e `back-end`.
- Ajustar estilo do componente `PaintCanCard` e adicionar imagens.
