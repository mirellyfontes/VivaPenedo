const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pev26",
  database: "vivapenedo",
});
app.use(cors());
app.use(express.json());

app.get("/getEventos", (req, res) => {
  let SQL = "SELECT * FROM eventos ORDER BY data, horario";

  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao acessar o banco de dados");
    } else {
      res.send(result);
    }
  });
});

app.post("/cadastrarEvento", (req, res) => {
  const { titulo, descricao, local, data, horario } = req.body;

  let SQL =
    "INSERT INTO eventos (titulo, descricao, local, data, horario) VALUES (?, ?, ?, ?, ?)";

  db.query(SQL, [titulo, descricao, local, data, horario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});