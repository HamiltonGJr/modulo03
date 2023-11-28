# Sistema de biblioteca

## Entidade/Domain/Model/Schema
Em um contexto de desenvolvimento de software, uma entidade no backend geralmente
se refere a um objeto ou conceito que representa algo do mundo real. Essas entidades
são usadas para modelar e armazenar dados no sistema.

### Livro
- Titulo: string
- Descricao: string
- Ano de Lancamento: number
- Autor: string
- Categoria: string
- Estoque: booleano

## Funcionalidades (CRUD: Create, Read, Update, Delete)
[x] - Deve ser possível cadastrar um livro, passando as informacoes: titulo, descricao, ano de lancamento, autor, categoria e estoque
[x] - Deve ser possível buscar todos livros.
[x] - Deve ser possível buscar um livro pelo titulo
[x] - Deve ser possível buscar todos os livros de um determinado autor
[x] - Deve ser possível atualizar as informacoes de um livro passando o seu id
[x] - Deve ser possível deletar cada livro pelo id

## RNF
[x] - Utilizar o Mongo BD para salvar os livros
[x] - Utilizar um servidor HTTP para receber requisições e retornar respostas

## Hints
1 - Para iniciar um projeto node
```bash
npm init
```

2 - Para instalar o drive do mongodb
```bash
npm install mongodb
#ou
npm i mongodb
```

3 - Para configurar o mongodb
```js
const { MongoClient } = require('mongodb');

const client = new MongoClient('a url mongo aqui');
const database = client.db('o nome do banco').collection('o nome da sua collection/tabela');
```

4 - Algumas funcoes do mongoClient
```js
database.find();
database.findOne();
database.insertOne();
database.updateOne();
database.deleteOne();
```
