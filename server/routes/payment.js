const { makePayment } = require("../controllers/payment.controller");
const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
router.route("/").post(verifyToken, makePayment);
module.exports = router;
