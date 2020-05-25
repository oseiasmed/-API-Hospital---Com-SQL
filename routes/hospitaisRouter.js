const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;
const authenticate = require("../middlewares/adminauth");
const HospitaisController = require("../controllers/HospitaisController");

router.get("/hospitais", authenticate, HospitaisController.index);
router.post("/hospitais", authenticate, HospitaisController.store);
router.put("/hospitais", authenticate, HospitaisController.update);
router.delete("/hospitais", authenticate, HospitaisController.delete);

module.exports = router;
