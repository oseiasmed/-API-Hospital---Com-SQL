const express = require("express");
const mysql = require("../mysql");

//Creating consultations

exports.store = (req, res, next) => {

    try {

        const query = 'INSERT INTO consultas (dtconsulta,hospitalId,pacienteId,statusId,createdAt,updatedAt) VALUES (?,?,?,?,?,?)';

        const result = mysql.execute(query, [

            req.body.dtconsulta, req.body.hospitalId,
            req.body.pacienteId, req.body.statusId,
            req.body.createdAt, req.body.updatedAt
        ]);

        const response = {
            mensagem: 'Consulta inserida com sucesso'

        }

        return res.status(201).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });
    }
};


//Editing consultations

exports.update = async (req, res, next) => {

    try {
        const query = ` UPDATE consultas
                        SET    dtconsulta  = ?,
                               hospitalId  = ?,
                               pacienteId  = ?,
                               statusId    = ?,
                               createdAt   = ?,
                               updatedAt   = ?
                        WHERE id = ?`;

        await mysql.execute(query, [

            req.body.dtconsulta, 
            req.body.hospitalId,
            req.body.pacienteId, 
            req.body.statusId,
            req.body.createdAt, 
            req.body.updatedAt,
            req.body.id
        ]);

        const response = {
            mensagem: 'Consulta atualizada com sucesso',
            Consulta: {

                data: req.body.dtconsulta,
                hospitalId: req.body.hospitalId,
                pacienteId: req.body.pacienteId,
                statusId: req.body.statusId,
                criação: req.body.createdAt,
                alteração: req.body.updatedAt,
                id:req.body.id

            }
        }

        return res.status(202).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });
    }
};

// Deleting consultations

exports.delete = async (req, res, next) => {

    try {

        const query = `DELETE FROM consultas WHERE id = ?`;

        await mysql.execute(query, [req.body.id]);

        const response = {

            mensagem: 'Consulta removida com sucesso',
        }

        return res.status(202).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });
    }
};

