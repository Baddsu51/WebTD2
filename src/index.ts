import express from "express";
import { router } from "./routes/students.route";

const hostname = "127.0.0.1";
const port = 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.use("/students", router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});