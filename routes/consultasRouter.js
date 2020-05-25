const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;
const authenticate = require("../middlewares/adminauth");
const ConsultasController = require("../controllers/ConsultasController");

router.post("/consultas", authenticate, ConsultasController.store);
router.put("/consultas", authenticate, ConsultasController.update);
// router.get("/consultas",authenticate, PacientesController.index);
// router.delete("/consultas",authenticate, PacientesController.delete);

module.exports = router;


