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

const port = process.env.PORT || 3005;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/campers-also", (req, res) => {
  console.log(req.query);
  pool.query("SELECT * FROM campers_also", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error reading CAMPERS_ALSO table`);
    } else if (result.rows.length === 0) {
      console.log(`CAMPERS_ALSO table not found`);
      res.status(404).send(`CAMPERS_ALSO table not found`);
    } else {
      console.log(result.rows);
      res.json(result.rows);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("CampersAlso server started on port " + port);
  }
});
