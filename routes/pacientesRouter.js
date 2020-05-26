const express = require("express");
const router = express.Router();
const login = require("../middlewares/login");
const PacientesController = require("../controllers/PacientesController");

router.get("/pacientes",login.mandatory,PacientesController.index);
router.post("/pacientes", login.mandatory, PacientesController.store);
router.put("/pacientes", login.mandatory, PacientesController.update);
router.delete("/pacientes", login.mandatory, PacientesController.delete);

module.exports = router;


