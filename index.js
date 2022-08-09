import express from "express";
import { readFile } from "fs";
let obj = {};
const app = express();

readFile("./server.json", "utf8", (err, data) => {
  if (err) throw err;
  obj = JSON.parse(data);
});

app.use(express.json());

app.get("/process/processDetails", (req, res) => {
  res.status(200).json(obj);
});

app.listen(3000, () => {
  console.log("Serve is listening on 3000");
});
