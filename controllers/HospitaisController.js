const mysql = require("../database/mysql");

//Creating hospitals

exports.store = (req, res, next) => {

    try {

        const query = 'INSERT INTO hospitals (nome, cep, endereco, numero, cnpj,complemento, bairro, cidade, uf,createdAt,updatedAt) VALUES (?,?,?,?,?,?,?,?,?,?,?)';

        const result = mysql.execute(query, [

            req.body.nome, req.body.cep, req.body.endereco,
            req.body.numero, req.body.cnpj, req.body.complemento,
            req.body.bairro, req.body.cidade, req.body.uf,
            req.bodycreatedAt, req.body.updatedAt

        ]);

        const response = {
            mensagem: 'Hospital inserido com sucesso'

        }

        return res.status(201).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });
    }
};

// Listing hospitals

exports.index = async (req, res, next) => {

    try {

        const result = await mysql.execute('SELECT * FROM hospitals');

        return res.status(200).send(result);

    } catch (error) {

        return res.status(500).send("Erro ao tentar listar os hospitais");
    }
}

//Editing hospitals

exports.update = async (req, res, next) => {

    try {

        const query = ` UPDATE hospitals
                        SET    nome           = ?,
                               cep            = ?,
                               endereco       = ?,
                               numero         = ?,
                               cnpj           = ?,
                               complemento    = ?,
                               bairro         = ?,
                               cidade         = ?,
                               uf             = ?
                        WHERE  id  = ?`;

        await mysql.execute(query, [

            req.body.nome,
            req.body.cep,
            req.body.endereco,
            req.body.numero,
            req.body.cnpj,
            req.body.complemento,
            req.body.bairro,
            req.body.cidade,
            req.body.uf,
            req.body.id


        ]);

        const response = {
            mensagem: 'Hosital atualizado com sucesso',
            Hospital: {

                nome: req.body.nome,
                cep: req.body.cep,
                endereço: req.body.endereco,
                número: req.body.numero,
                cnpj: req.body.cnpj,
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


// Deleting hospitals

exports.delete = async (req, res, next) => {

    try {

        const query = `DELETE FROM hospitals WHERE id = ?`;

        await mysql.execute(query, [req.body.id]);

        const response = {

            mensagem: 'Hospital removido com sucesso',
        }

        return res.status(202).send(response);

    } catch (error) {

        return res.status(500).send({ error: error });

    }
};
