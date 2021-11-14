const express = require("express")
const carsRouter = require("./cars/cars-router");
const {logger} = require("./middleware/");

const server = express();

server.use(express.json());
server.use("/api/cars", logger, carsRouter);

server.get("/", (req, res) => {
    res.status(200).send("server running")
})

module.exports = server
