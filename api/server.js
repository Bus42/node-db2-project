const express = require("express")
const carsRouter = require("./cars/cars-router");
const morgan = require("morgan");

const server = express();

const middleware = [
    morgan(":method :url :status :res[content-length] - :response-time ms"),
    express.json(),
]

server.use(middleware);
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
    res.status(200).send("server running")
})

module.exports = server
