import pkg from "pg";
const { Pool } = pkg;
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3003;
dotenv.config();

const pool = new Pool({
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());


app.post("/home/postusers", (req, res) => {
  const { username, password } = req.body;
  const users = [username, password];
  pool.query(
    "INSERT INTO users (username, password) VALUES ($1, $2)",
    users,
    (err, results) => {
      if (err) {
        console.error("Erro ao registrar chamada:", err);
        res.status(500).send("Erro interno do servidor");
      } else {
        res.json(results.rows);
      }
    }
  );
});

//POST DOS CARROS
app.post("/home/postcars", (req, res) => {
  const { nome,marca,cor,ano,tipo,combustivel } = req.body;
  const users = [nome,marca,cor,ano,tipo,combustivel];
  pool.query(
    "INSERT INTO car (nome,marca,cor,ano,tipo,combustivel) VALUES ($1, $2, $3, $4, $5, $6)",
    users,
    (err, results) => {
      if (err) {
        console.error("Erro ao registrar chamada:", err);
        res.status(500).send("Erro interno do servidor");
      } else {
        res.json(results.rows);
      }
    }
  );
});

//SELECT DOS CARROS
app.get("/home/cars", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM car"); 
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).send("Server error");
  }
});



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
