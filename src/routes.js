const express = require("express");
const ExampleController = require("./controllers/ExampleController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello Word");
});

routes.post("/example", ExampleController.store);

module.exports = routes;
