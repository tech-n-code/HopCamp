import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import bodyParser from 'body-parser';
import cors from 'cors';
const {Pool} = pg;

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(express.static("client"));
app.use(cors());

const port = process.env.PORT || 3000;
const pool = new Pool ({ connectionString: process.env.DATABASE_URL });
pool.connect();

app.get("/test", (req, res) => {
  console.log("working");
  res.send("working");
});

app.get("/api/photogallery", (req, res) => {
  pool.query("SELECT * FROM photos").then((result) => {
    res.json(result.rows); 
  });
});

app.get("/api/photogallery/:id", (req, res) => {
  pool
    .query("SELECT * FROM photos WHERE id = $1", [req.params.id])
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Photo not found" });
      } else {
        res.json(result.rows);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(port, () => {
  console.log(`Server listening on: ${port}`);
});