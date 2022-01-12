const express = require("express");

const app = express();
app.use(express.json());

const alunos = ["aluno1", "aluno2", "aluno3", "aluno4"];

app.get("/alunos", (req, res) => {
  return res.json(alunos);
});

app.get("/alunos1", (req, res) => {
  console.log(req.query);
  return res.json(alunos);
});

app.delete("/alunos", (req, res) => {
  console.log(req.headers.id);
  return res.json(alunos);
});

app.post("/alunos", (req, res) => {
  console.log(req.body);
  alunos.push(req.body.nome);
  return res.json(alunos);
});

app.put("/alunos/:id", (req, res) => {
  console.log(req.params);
  alunos[req.params.id] = req.body.novoNome;
  return res.json(alunos);
});

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000");
});
