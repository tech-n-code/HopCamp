import app from "./src/server.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5005;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server started on port " + port);
  }
});