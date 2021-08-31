const express = require("express");
const router = express.Router();
const ajiltan = require("../models/ajiltan");

const { crud } = require("../components/crud");

const {
  ajiltanNevtrey,
  tokenoorAjiltanAvya,
} = require("../controller/ajiltan");

crud(router, "ajiltan", Ajiltan, {
  fileZam: "./zurag/ajiltan",
  fileName: "zurag",
});

router.route("/ajiltanNevtrey").post(ajiltanNevtrey);

router.route("/tokenoorAjiltanAvya").post(tokenoorAjiltanAvya);

module.exports = router;
