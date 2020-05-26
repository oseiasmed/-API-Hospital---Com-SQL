const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");


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

// Routes

const pacientesRouter = require("./routes/pacientesRouter");
const hospitaisRouter = require("./routes/hospitaisRouter");
const consultasRouter = require("./routes/consultasRouter");
const userRouter = require("./routes/usersRouter");

//Body parser 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using Routes

app.use("/", pacientesRouter);
app.use("/", hospitaisRouter);
app.use("/", consultasRouter);
app.use("/", userRouter);

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

app.listen(3000, () => {

    console.log("O servidor está rodando!");

});



