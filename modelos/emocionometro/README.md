## EMOCIONOMETRO 

[] - Eu como **usuario**, quero registrar que no **dia atual** estou me sentindo de **0 - 5**

Uer {
  name: String
  observacao: String
  password: String
  feeling: [ { date: Date, value: Number } ]
}

# Regras de Negocio

- Funcionalidades: registrar sentimentos
- Regras: 
--- Deve ser póssivel registrar apenas uma vez por dia.
--- Deve ser obrigatório passar uma obserção para cada usuario.

[x] - TypeScript + tsx (tradutor de type para java)
[x] - Express
[x] - Variaveis de habiente - npm install dotenv
[x] - Mongoose

