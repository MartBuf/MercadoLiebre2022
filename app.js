const express = require("express");
const path = require("path");
const app = express();
app.listen(3100, () => console.log("http://localhost:" + 3100));
const pathPublic = path.resolve(__dirname, "./public");
app.use(express.static(pathPublic));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
