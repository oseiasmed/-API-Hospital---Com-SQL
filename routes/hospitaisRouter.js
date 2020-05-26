const express = require("express");
const router = express.Router();
const login = require("../middlewares/login");
const HospitaisController = require("../controllers/HospitaisController");

router.get("/hospitais", login.mandatory, HospitaisController.index);
router.post("/hospitais", login.mandatory, HospitaisController.store);
router.put("/hospitais", login.mandatory, HospitaisController.update);
router.delete("/hospitais", login.mandatory, HospitaisController.delete);

module.exports = router;


