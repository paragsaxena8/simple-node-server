import express from "express";
import { readFile } from "fs";
let obj = {};
const app = express();
app.use(express.json());

// Read and serve JSON file here
readFile("./server.json", "utf8", (err, data) => {
  if (err) throw err;
  obj = JSON.parse(data);
});

// You can add your custom routes here
app.get("/", (req, res) => {
  res.status(200).json(obj);
});

app.listen(3000, () => {
  console.log("Serve is listening on 3000");
});
