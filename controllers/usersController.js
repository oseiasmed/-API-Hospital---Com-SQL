/* const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("../mysql");

const JWTSecret = "@Ty&93**$¨%@rtsh*&(NF)5$@*0";

router.post("/authenticate", (req, res) => {

    var user = req.body.user;
    var password = req.body.password;

    const result = mysql.execute('SELECT * FROM users WHERE id=id');

        if (user != undefined) {

            var correct = bcrypt.compareSync(password, user.password);

            if (correct) {

                req.session.user = {

                    id: user.id,
                    email: user.email
                };

                jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '24h' }, (error, token) => {

                    if (error) {

                        res.status(400);
                        res.json({ Erro: "Falha interna" });

                    } else {

                        res.status(200).send(result);
                        res.json({ token: token });

                    };
                });

            } else {

                res.status(404);
                res.json({ err: "Usuário inválido" });
            }

        } else {

            res.status(401);
            res.json({ err: "Credenciais inválidas" });
        };
    });

module.exports = router; */