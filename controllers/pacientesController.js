const mysql = require("../database/mysql");

//Creating patients

exports.store = (req, res, next) => {

    try {

        const query = 'INSERT INTO pacientes (nome, cpf, endereco, numero, dtnascimento, complemento, bairro, cidade, uf,createdAt,updatedAt) VALUES (?,?,?,?,?,?,?,?,?,?,?)';

        const result = mysql.execute(query, [

            req.body.nome, req.body.cpf, req.body.endereco, req.body.numero,
            req.body.dtnascimento, req.body.complemento, req.body.bairro, req.body.cidade,
            req.body.uf, req.body.createdAt, req.body.updatedAt
        ]);

        const response = {
            mensagem: 'Paciente inserido com sucesso'

        }

        return res.status(201).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });
    }
};

// Listing patients

exports.index = async (req, res, next) => {

    try {

        const result = await mysql.execute('SELECT * FROM pacientes');

        return res.status(200).send(result);


    } catch (error) {

        return res.status(500).send("Erro ao tentar listar os pacientes");
    }
}

//Editing patients

exports.update = async (req, res, next) => {

    try {
        const query = ` UPDATE pacientes
                        SET    nome          = ?,
                               cpf           = ?,
                               endereco      = ?,
                               numero        = ?,
                               dtnascimento  = ?,
                               complemento   = ?,
                               bairro        = ?,
                               cidade        = ?,
                               uf            = ?
                        WHERE id = ?`;

        await mysql.execute(query, [
            req.body.nome,
            req.body.cpf,
            req.body.endereco,
            req.body.numero,
            req.body.dtnascimento,
            req.body.complemento,
            req.body.bairro,
            req.body.cidade,
            req.body.uf,
            req.body.id
        ]);
        const response = {
            mensagem: 'Paciente atualizado com sucesso',
            Pacientes: {

                nome: req.body.nome,
                cpf: req.body.cpf,
                endereço: req.body.endereco,
                número: req.body.numero,
                nascimento: req.body.dtnascimento,
                complemento: req.body.complemento,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                uf: req.body.uf,
                id: req.body.id

            }
        }

        return res.status(202).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });
    }
};

// Deleting patients

exports.delete = async (req, res, next) => {

    try {

        const query = `DELETE FROM pacientes WHERE id = ?`;

        await mysql.execute(query, [req.body.id]);

        const response = {

            mensagem: 'Paciente removido com sucesso',
        }

        return res.status(202).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });
    }
};