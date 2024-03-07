### Birth Registration PaaS API - GraphQL 🚀 🔄 🌐

Codificação de aplicação em NestJs com Typescript que fornece uma API para o registro de nascimentos para serviço de PaaS com uso GraphQL e PostgreSQL, permitindo criar, ler, atualizar e deletar registros de nascimento. Ela é construída usando NestJS e GraphQL, demonstrando como essas tecnologias podem ser utilizadas para construir APIs robustas e escaláveis.

#### Tecnologias Utilizadas
- NestJS: Um framework de Node.js para construir aplicações server-side eficientes e escaláveis.
- GraphQL: Uma linguagem de consulta para APIs que fornece uma maneira mais eficiente, poderosa e flexível de trabalhar com dados.
  PostgreSQL: um banco de dados SQL
- Prisma: Um ORM (Object-Relational Mapping) que facilita o trabalho com o banco de dados.


#### Estrutura do Código
src/
birth-record/: Módulo contendo a lógica de negócios para os registros de nascimento.
dto/: Data Transfer Objects definindo as estruturas para criação e atualização dos registros.
entities/: Entidades usadas pelo GraphQL para definir os tipos de dados.
birth-record.module.ts: Módulo NestJS para agrupar componentes relacionados aos registros de nascimento.
birth-record.resolver.ts: Resolver GraphQL para lidar com as queries e mutations.
birth-record.service.ts: Serviço para executar operações de negócios relacionadas aos registros de nascimento.
prisma/: Módulo contendo a configuração e serviço do Prisma.
prisma/schema.prisma: Define o modelo de dados para o Prisma.
Funcionalidades

#### Comandos para subir aplicação:

Instalar o NestJs caso não tenha instalado
````
npm i -g @nestjs/cli
````

Acesse o diretório da aplicação:
````
cd birth-registration-paas
````

2. Instalação do GraphQL e Prisma
````
npm install @nestjs/graphql @nestjs/apollo graphql apollo-server-express

````
3. Para instalar o Prisma, um ORM que facilita o acesso ao banco de dados:
````
npm install prisma @prisma/client
````

````
npx prisma init
````

4.  Definindo o Modelo de Dados - Edite o arquivo schema.prisma para definir o modelo para registro de nascimento.
````
model BirthRecord {
  id           Int      @id @default(autoincrement())
  fullName     String
  dateOfBirth  DateTime
  placeOfBirth String
  parentNames  String[]
  registrationNumber String @unique
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
````

Execute o seguinte comando para criar as tabelas no banco de dados:
````
npx prisma migrate dev --name init

````
5. Configure o .env com seus dados de acesso ao Banco de dados:
````
DATABASE_URL="postgresql://seuUsuario:suasenhaxp@localhost:5432/seudb?schema=public"
````

6. Rode a Aplicação com:

````
npm run start
````

#### A API suporta as seguintes operações:

Criação de Registro de Nascimento: Permite adicionar um novo registro de nascimento.
Listagem de Registros de Nascimento: Permite listar todos os registros de nascimento.
Consulta de Registro de Nascimento por ID: Permite consultar um registro específico por seu ID.
Atualização de Registro de Nascimento: Permite atualizar um registro de nascimento existente.
Remoção de Registro de Nascimento: Permite remover um registro de nascimento.
Exemplos de Requisições GraphQL
Criação de Registro de Nascimento
graphql

````
mutation {
  registerBirth(birthRecordInput: {
    fullName: "John Doe",
    dateOfBirth: "2024-01-01",
    placeOfBirth: "City, Country",
    parentNames: ["Jane Doe", "Doe John"],
    registrationNumber: "123456"
  }) {
    id
    fullName
  }
}
````

- Listagem de Registros de Nascimento
graphql
````
query {
  birthRecords {
    id
    fullName
  }
}
````

- Consulta de Registro de Nascimento por ID

````
graphql

query {
  birthRecord(id: 1) {
    id
    fullName
    dateOfBirth
    placeOfBirth
    parentNames
    registrationNumber
  }
}
````

-Atualização de Registro de Nascimento
graphql
````
mutation {
  updateBirthRecord(updateBirthRecordInput: {
    id: 1,
    fullName: "John Doe Jr."
  }) {
    id
    fullName
  }
}
````
- Remoção de Registro de Nascimento

````
graphql
mutation {
  removeBirthRecord(id: 1)
}
````

#### Boas Práticas e Padrões Utilizados
Princípios SOLID: Os princípios SOLID são seguidos para garantir que o código seja modular, extensível e fácil de manter.
Padrões de Design: Utilizamos padrões como Dependency Injection (DI) fornecido pelo NestJS para desacoplar as dependências e facilitar o teste.
Validação de Dados: Utilizamos decorators de validação nos DTOs para garantir a integridade dos dados enviados para a API.
Tratamento de Erros: Implementamos um tratamento de erros robusto para fornecer feedback claro e preciso para os consumidores da API.
Este README fornece uma visão geral da sua aplicação de registro de nascimentos, incluindo como interagir com ela via GraphQL e as boas práticas adotadas durante o desenvolvimento. Lembre-se de ajustar os caminhos e os exemplos conforme necessário para refletir exatamente como sua aplicação está estruturada.

#### Conclusão
A aplicação em NestJs fornece uma visão geral da sua aplicação de registro de nascimentos, incluindo como interagir com ela via GraphQL e as boas práticas adotadas durante o desenvolvimento. Lembre-se de ajustar os caminhos e os exemplos conforme necessário para refletir exatamente como sua aplicação está estruturada.


#### Autor:
Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)
