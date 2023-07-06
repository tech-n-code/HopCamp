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

const port = process.env.PORT || 3006;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/things-nearby", function (req, res) {
  pool.query(`SELECT * FROM things_nearby`, function (err, response) {
    console.log(err ? err : response.rows);
    res.json(response.rows);
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("ThingsNearby server started on port " + port);
  }
});