---
marp: true
theme: default
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---
# Aula 06
## Aplicação Financeira
--- 
# Requisitos: tudo que o sistema precisa fazer
  - Deve ser possivel criar uma conta
  - Deve ser possivel buscar o extrato do cliente
  - Deve ser possivel realizar um deposito
  - Deve ser possivel realizar um saque
  - Deve ser possivel atualizar os dados da conta do clientes
  - Deve ser possivel obter dados da conta do cliente
  - Deve ser possivel deletar uma conta 

--- --------------------------------
# Regra de negocios
- Não deve ser possível cadastrar uma conta com CPF já existente
- Não deve ser possível buscar extrato em uma conta não existente
- Não deve ser possível fazer depósito em uma conta não existente
- Não deve ser possível fazer saque em uma conta não existente
- Não deve ser possível excluir uma conta não existente
- Não deve ser possível fazer saque quando o saldo for insuficiente

----
# dados da conta
- cpf: string
- nome: string
- id: uuid
- lançamentos: []
# Trabalhar com dados 
- array
  ``` const clientes = []```
--------------------------------
# Deve ser possivel criar uma conta
- Trabalhar com uuid
  - ```yarn add uuid```
  - ```js
      import {v4 as uuidv4} from "uuid"
    ```
```js
app.post('/conta', (req, res) => {
  const {cpf, none} = req.body;
  const id = uuidv4()
  clientes.push({
    cpf,
    nome,
    id,
    lancamentos: []
  })
  return res.status(201).send();
})
```
--------------------------------
# Não deve ser possível cadastrar uma conta com CPF já existente
```js
app.post('/conta', (req, res) => {
  const {cpf, none} = req.body;
  const clienteExiste = clientes.some((cliente) => cliente.cpf === cpf)

  if(clienteExiste){
    return res.status(400).json({erro: "Cliente já existe"})
  }
  clientes.push({
    cpf,
    nome,
    id: uuidv4(),
    lancamentoss: []
  })
  return res.status(201).send();
})
```

--- 
# Deve ser possivel buscar o extrato do cliente
```js
app.get('/extrato/:cpf', (req, res) => {
  const {cpf} = req.params;
  const cliente = clientes.find(cliente => cliente.cpf === cpf)
  return res.json(cliente);
})
```
---
# Não deve ser possível buscar extrato em uma conta não existente
```js
app.get('/extrato/:cpf', (req, res) => {
  const {cpf} = req.params;
  const cliente = clientes.find(cliente => cliente.cpf === cpf)
  if(!cliente){
    return res.status(400).json(error: "Cliente não encontrado")
  }
  return res.json(cliente);
})
```
---
## Trabalhando com token no header
```js
app.get('/extrato/', (req, res) => {
  const {cpf} = req.header;
  const cliente = clientes.find(cliente => cliente.cpf === cpf)
  if(!cliente){
    return res.status(400).json(error: "Cliente não encontrado")
  }
  return res.json(cliente.lancamentos);
})
```
---
## Middlewares
```js
function verificarContaExiste(req, res, next){
  const {cpf} = req.header;
  const cliente = clientes.find(cliente => cliente.cpf === cpf)
  if(!cliente){
    return res.status(400).json(error: "Cliente não encontrado")
  }
  req.cliente = cliente
  return next();
}
```
---
# Adicionando um middleware
- Antes da função de callback
```js
app.get('/extrato/',verificarContaExiste, (req, res) => {
    const {cliente} = req;
    return res.json(cliente);
})

```
- Usando app.use antes da definição de rotas
```js
aap.use(verificarContaExiste)
app.get('/extrato/', (req, res) => {
    const {cliente} = req;
    return res.json(cliente);
})

```
---
# Deve ser possivel realizar um deposito
```js
app.post('/deposito',verificarContaExiste, (req, res) => {
  const {descricao, valor} = req.body;
  const {cliente} = req;
  const operacao = {
    descricao,
    valor,
    created_at: new Date(),
    tipo: "credito"
  }
  cliente.lancamentos.push(operacao)
  return res.status(201).send();
})
```
---
# Deve ser possivel realizar um saque
```js
app.post('/saque',verificarContaExiste, (req, res) => {
  const {valor_saque} = req.body;
  const {cliente} = req;
  const saldo = cliente.lancamentos.reduce((acumulador, lancamento) => {
    if(lancamento.tipo == "credito"){
      return acumulador + lancamento.valor
    }else{
      return acumulador - lancamento.valor
    }
  },0)
  if(saldo < valor_saque){
    return res.status(400).json({erro: "dinheiro insuficiente"});
  }else{
    const operacao = {
    valor_saque,
    created_at: new Date(),
    tipo: "debito"
    }
  cliente.lancamentos.push(operacao)
  return res.status(201).send();
  }
})
```