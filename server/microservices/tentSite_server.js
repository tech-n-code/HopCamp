import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";
const { Pool } = pg;

dotenv.config();
const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
pool.connect();

const port = process.env.PORT || 3002;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/tentsites", (req, res) => {
  pool.query(`SELECT * FROM tentsites ORDER BY id ASC`).then((response) => {
    res.send(response.rows);
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("TentSite server started on port " + port);
  }
});
