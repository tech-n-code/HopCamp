import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import pg from "pg";
import bodyParser from 'body-parser';
const { Pool } = pg;

dotenv.config();
const app = express();
const pool = new Pool({connectionString: process.env.DATABASE_URL});
pool.connect();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded( {extended: false} ))
app.get('/',(req,res)=>{
    res.send('wows');
})
app.get('/api/land',(req,res)=>{
    pool.query(`SELECT * FROM land`).then(response=>{
        res.send(response.rows);
    })
})
// app.get("/api/ratings", (req, res) => {
//     console.log(req.query);
//     pool.query("SELECT * FROM rating", (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send(`Error reading RATING table`);
//         } else if (result.rows.length === 0) {
//             console.log(`RATING table not found`);
//             res.status(404).send(`RATING table not found`);
//         } else {
//             res.json(result.rows);
//         }
//     })
// });

// app.get("/api/camping-spots", (req, res) => {
//     console.log(req.query);
//     pool.query("SELECT * FROM camping_spot", (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send(`Error reading CAMPING_SPOT table`);
//         } else if (result.rows.length === 0) {
//             console.log(`CAMPING_SPOT table not found`);
//             res.status(404).send(`CAMPING_SPOT table not found`);
//         } else {
//             console.log(result.rows);
//             res.json(result.rows);
//         }
//     })
// });
// app.get("/api/photogallery", (req, res) => {
//     pool.query("SELECT * FROM photos").then((result) => {
//       res.json(result.rows); 
//     });
//   });
  
//   app.get("/api/photogallery/:id", (req, res) => {
//     pool
//       .query("SELECT * FROM photos WHERE id = $1", [req.params.id])
//       .then((result) => {
//         if (result.rows.length === 0) {
//           res.status(404).json({ error: "Photo not found" });
//         } else {
//           res.json(result.rows);
//         }
//       })
//       .catch((error) => {
//         res.status(500).json({ error: "Internal server error" });
//       });
//   });

app.listen(port,()=>{
    console.log('Listening to port ' + port);
})