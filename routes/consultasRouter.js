const express = require("express");
const router = express.Router();
const login = require("../middlewares/login");
const ConsultasController = require("../controllers/ConsultasController");

//router.get("/consultas", ConsultasController.index);
router.post("/consultas", login.mandatory, ConsultasController.store);
router.put("/consultas", login.mandatory, ConsultasController.update);
router.delete("/consultas", login.mandatory, ConsultasController.delete);

module.exports = router;




