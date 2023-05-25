import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";
const { Client } = pg;

const app = express();
app.use(express.static("public"));
app.use(cors());

dotenv.config();
const port = process.env.THINGS_NEARBY_PORT || 3000;

const client = new Client(process.env.DATABASE_URL);
client.connect();

app.use(express.json());

app.get('/api/things-nearby', function(req, res) {
    client.query(`SELECT * FROM things_nearby`, function(err, response) {
        console.log(err ? err : response.rows)
        res.json(response.rows)
    })
});

app.listen(port, function(err) {
    if (err) {
        console.error(err);

    } else {
        console.log(`Server started on port ${port}`);
    }
});