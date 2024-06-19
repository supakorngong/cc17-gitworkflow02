const express = require("express");
const notFound = require("./middleware/notFound");
require("dotenv").config();
const app = express();

<<<<<<< Updated upstream
app.use("/register", (req, res) => {
  res.json({ message: "register..." });
});

app.use(notFound);

=======
app.use("/login", (req, res) => {
  res.json({ msg: "Login successfully" });
});

>>>>>>> Stashed changes
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server on ", port));
