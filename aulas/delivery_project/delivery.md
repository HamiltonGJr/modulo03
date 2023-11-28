# Sistema de Entrega

## Pedido
- Nome do produto -> string
- Endereço do comprador -> string
- Nome do comprador -> string
- Data do pedido -> string
- Pedido entregue -> boolean

## Funcionalidades
- Deve ser capaz de criar um pedido, passando as informações: nome do produto, endereço do comprador, nome do comprador.
- Deve ser capaz de buscar todos os pedidos não entregues.
- Deve ser capaz de atualizar o status de um pedido, utilizando o ID como identificador.

# TO-DO
[x] - Configurar um projeto node(iniciar o projeto, criar pastas, criar script, typescript)
[ ] - Camadas
- - - [ ] - Dados
- - - [ ] - Lógica
- - - [ ] - Interface
[ ] - Configurar o banco de dados
[ ] - Configurar servidor HTTP

# Iniciar projeto

Para iniciar um projeto em node:
```
npm init -y
```

### Configurar typescript na unha:
instalar:
```
npm install typescript -D
```
criar arquivo de config:
```
npx tsc --init
```
criar a pasta do javascript traduzido(transpilado)
```
npx tsc
```

### Configurar typescript:
instalar:
```
npm install typescript tsx -D
```
criar arquivo de config:
```
npx tsc --init
```
para executar um arquivo
```
npm tsx [o caminho do arquivo]
exemplo:
npx tsx src/index.ts
```

# Camadas do projeto / Arquitetura

Exemplos: MVC / Arquitetura Limpa / Arquitetura Hexagonal

## N-Tier / Arquitetura Camadas

- Interface(controllers/routes) -> meio de comunicacao
- Lógica(services) -> regras de negócio do sistema
- Dados(repositories/entities/domain) -> manipulacao dados


Interface -> logica -> dados
(controller/routes) -> (service) -> (domain/repositories)

/products
/cars

routes -> nomear as funcionalidas
controller -> tecnico do time de futebol
service -> funcionalidades do sistema
repository -> Padrao de projeto -> Manipular o banco de dados 
domain -> Coracao Do Projeto -> Core -> Representacao dos objetos do mundo real no nosso sistema
