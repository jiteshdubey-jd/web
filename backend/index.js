const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contact"));

app.listen(port, () => {
  console.log(`backend listening on port ${port}`);
});
