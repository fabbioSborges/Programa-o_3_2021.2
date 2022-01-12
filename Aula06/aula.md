---
marp: true
theme: default
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---
# Aula 06
## Iniciando Express - Backend

---
# Express
## Programar utilizando apenas a API HTTP nativa é muito trabalhoso!

---
# Express
-  framework
-  módulo para desenvolvimento de aplicações web 
-  inspirado pelo framework Sinatra da linguagem Ruby.
-  [Documentação](http://expressjs.com)

---
# Caracteristicas Express
- Roteamento de urls via callbacks;
- Middleware;
- Interface RESTFul;
- Suporte a File Uploads;
- Configuração baseado em variáveis de ambiente;
- Integração com Template Engines;
- Integração com SQL e NoSQL;
- ---

# Vamos Usar o Express para desenvolver APIREST

---
# API 
- Application Programming Interface (Interface de Programação de Aplicativos)

# REST
- Transferência de Estado Representacional"(Representational State Transfer
- Modelo de Arquitetura 
- conjunto de restrições de arquitetura.

---
# Regras Rest
- Para que uma API seja considerada do tipo RESTful, ela precisa está em conformidade com os seguintes critérios:
  - cliente/servidor com solicitações gerenciadas por HTTP.
  - Stateless: nenhuma informação do cliente é armazenada no servidor.
  - Armazenar dados em cache para otimizar as interações
  - Interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado.
    - Identificação dos recursos **endpoints**
    - Representação de recursos (JSON)
    - Mensagens auto-descritivas
  - Camadas entre client/server
  - Código sob demanda
- --
# Métodos de Requisição 
- GET: Leitura
- POST: Criação
- PUT: Atualização
- DELETE: Deletar
- PATCH: Atualização Parcial
---
![bg 70%](https://kimiahost.com/blog/wp-content/uploads/2021/08/http-status-codes-1.jpg)

---
# Parametros das Requisições
- Header Params
  ```
  authority: app.teste.com.br
  method: GET
  scheme: https
  ```
- Query Params
  - http://servidor.com.br/user?page=2&limit=50
    - Chave: page e limit
    - Valor: 2 e 50
    - Separação: &
- ---
# Parametros das Requisições
- Routes Params
  - http://servidor.com.br/user/*{id}*

- Body Params
  ```
  {
    "user":"fabbio"
  }
  ```
---
# Configurando o projeto
- Criar uma pasta
  ``` \app ```
- Executar 
  ``` yarn init ```
- Adicionar o express
  ``` yarn add express```
---
# Nodemon
- O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node.js reiniciando automaticamente o servidor.
``` yarn add nodemon -D```
- Adicionar script no package.json
  ```JSON
  "script": {
    "dev": "nodemon src/index.js"
  }
  ```
- Adicionar o sucrase-node 
 ```yarn add sucrase -D```
- Criar o arquivo nodemon.json na raiz
  ``` 
  {
     "execMap": {
       "js":"sucrase-node"
     }
  }
  ```
--- --------------------------------

- Criar pasta src e o arquivo index.js
  ```js
    import express from 'express'
    const app = express();

    app.get('/', (req, res) => {
      retunr res.json({messagem: "Olá Turma"})
    })

    app.listen(3333, () => "servidor executando na porta 333")
  ```

- ```yarn dev```

--- 
# Utilizando método HTTP no Express
- GET: Buscar uma informação no servidor
- POST: Inserir uma informação no servidor
- PUT: Alterar algumas informações no servidor
- PATCH: Alterar uma informação especifica no servidor
- DELETE: Deletar uma informação no servidor
--- 
# GET
```js
app.get('/alunos', (req, res) => {
  res.json(['aluno01', 'aluno02', 'aluno03'])
})
```
--- 
# POST
```JS
app.post('/alunos', (req, res) => {
  res.json(['aluno01', 'aluno02', 'aluno03', 'aluno04'])
})
```

--- 
# PUT
```JS
app.put('/alunos/:id', (req, res) => {
  res.json(['aluno06', 'aluno02', 'aluno03', 'aluno04'])
})
```
--- 
# PATCH
```JS
app.patch('/alunos/:id', (req, res) => {
  res.json(['aluno01', 'aluno02', 'aluno03', 'aluno04'])
})
```
--- 
# DELETE
```JS
app.delete('/alunos/:id', (req, res) => {
  res.json(['aluno01', 'aluno02', 'aluno04'])
})
```
----------------------------------------------------------------
# Tipos de Parametros
- Routes Params: Parametros encapsulados nas rotas (depois do barra)
  - Identificar um recurso
    - Deletar
    - Atualizar
    - Buscar

----------------------------------------------------------------
# Routes Params
```JS
app.put('/alunos/:id', (req, res) => {
  const id = req.params;
  //const {id} = req.params;
  console.log(id)
  res.json(['aluno06', 'aluno02', 'aluno03', 'aluno04'])
})
```
----------------------------------------------------------------
# Tipos de Parametros
- Query Params: Presente na rotas com o simbulo "?" Paginação, filtro
- ``` /alunos?page=1&periodo=2```
```JS
app.get('/alunos', (req, res) => {
  const query = req.query;
  console.log(query)
  res.json(['aluno06', 'aluno02', 'aluno03', 'aluno04'])
})
```
---
# Tipos de Parametros
- Body Params: Objetos que será repassado para inserção e remoção de recurso
- Informar o tipo de parametro é do tipo JSON
    ```app.use(express.json())```
``` 
  {
    "nome":"fabbio"
  }
```
```JS
app.post('/alunos', (req, res) => {
  const body = req.body;
  //const {nome} = req.body;
  console.log(body)
  res.json(['aluno06', 'aluno02', 'aluno03', 'aluno04'])
})
```