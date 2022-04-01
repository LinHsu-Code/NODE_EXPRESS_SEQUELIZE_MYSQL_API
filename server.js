const express = require("express");
const cors = require("cors");

const app = express();

const corOptions = {
  origin: "http://localhost:8081",
};

// middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

// port
const PORT = process.env.PROT || 8080;

//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
