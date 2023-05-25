import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

const { Pool } = pg;

const app = express();

dotenv.config();
const port = process.env.PORT //|| 3000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10
});

app.use(express.json());

app.use(cors());

// app.get("/", (req, res) => {   
//     res.send("Hello, world!");
// });

app.get("/api/ratings", (req, res) => {
    console.log(req.query);
    pool.query("SELECT * FROM rating", (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(`Error reading RATING table`);
        } else if (result.rows.length === 0) {
            console.log(`RATING table not found`);
            res.status(404).send(`RATING table not found`);
        } else {
            console.log(result.rows);
            res.json(result.rows);
        }
    })
});

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});