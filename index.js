const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Routes

const pacientesRouter = require("./routes/pacientesRouter");
const hospitaisRouter = require("./routes/hospitaisRouter");
const consultasRouter = require("./routes/consultasRouter");
const userRouter = require("./routes/usersRouter");

// Headers

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

//Body parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using Routes

 app.use("/", pacientesRouter);
 app.use("/", hospitaisRouter);
 app.use("/", consultasRouter);
 app.use("/", userRouter);

 app.listen(3000, () => {

    console.log("O servidor está rodando!");

});



