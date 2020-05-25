const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

const PacientesController = require("../controllers/PacientesController");

router.post("/pacientes", PacientesController.store);
router.get("/pacientes", PacientesController.index);
router.put("/pacientes", PacientesController.update);
router.delete("/pacientes", PacientesController.delete);

module.exports = router;


