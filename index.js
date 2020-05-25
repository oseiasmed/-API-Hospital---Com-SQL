const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("./mysql");

// Routes

const pacientesRouter = require("./routes/pacientesRoutes");
const hospitaisRouter = require("./routes/hospitaisRouter");
const consultasRouter = require("./routes/consultasRouter");

//Body parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using Routes

app.use("/", pacientesRouter);
app.use("/", hospitaisRouter);
app.use("/", consultasRouter);

app.listen(3000, () => {

    console.log("O servidor está rodando!");

});


