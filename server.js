const express = require("express");
const notFound = require("./middleware/notFound");
require("dotenv").config();
const app = express();

app.use("/register", (req, res) => {
  res.json({ message: "register..." });
});

app.use(notFound);

app.use("/login", (req, res) => {
  res.json({ msg: "Login successfully" });
});

app.use("/get-user", (req, res) => {
  res.status(401).json({ message: "GET USER..." });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server on ", port));
