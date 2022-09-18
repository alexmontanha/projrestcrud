# Projrestcrud


Projeto para fins educacionais, com exemplos de CRUD em um serviço Rest.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Serviço Rest

URL Base: https://chatcolab.firebaseio.com/crud/
Parâmetros:
[AppclientId] -> id do App Cliente, pode ser qualquer identificador único, como o RA do estudandte.
[ClientId] -> id do Cliente a ser manipulado

### C -> Create -> Post
url: https://chatcolab.firebaseio.com/crud/[AppclientId]/clientes.json

Data:
{
  "Nome": "Jean-Pierre Vernant",
  "CPF": "37402643220",
  "CEP": "01001000",
  "Endereco": "Praça da Sé",
  "ID": ""
}

### R -> Read All -> Get
url: https://chatcolab.firebaseio.com/crud/[AppclientId]/clientes.json

### R -> Read One Record -> Get
url: https://chatcolab.firebaseio.com/crud/[AppclientId]/clientes/[ClientId].json


### U -> Update -> Put
url: https://chatcolab.firebaseio.com/crud/[AppclientId]/clientes/[ClientId].json

Data:
{
  "Nome": "Alexandre Montanha",
  "CPF": "37402643220",
  "CEP": "01001000",
  "Endereco": "Praça da Sé",
  "ID": "-NBwzFkk3LRTp09i-ERx"
}

### D -> Delete -> Delete
url: https://chatcolab.firebaseio.com/crud/[AppclientId]/clientes/[ClientId].json
