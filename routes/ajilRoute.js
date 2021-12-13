const express = require("express");
const router = express.Router();
const ajil = require("../models/ajil");
const { ajilEkhluulya, ajilDuusgaya } = require("../controller/ajil");
const {
  tuluvluguuKhutulyu,
  tuluvluguuDuusgaya,
} = require("../controller/tuluvluguu");

const { crud } = require("../components/crud");
const mongoTransaction = require("../components/mongoTransaction");
const { tokenShalgakh } = require("../middleware/tokenShalgakh");

crud(router, "ajil", ajil);

router.post(
  "/ajilEkhluulya/:turul/:ajiliinId/:exp/:tuluvluguuniiId",
  tokenShalgakh,
  async (req, res, next) => {
    mongoTransaction(req, res, next, ajilEkhluulya, tuluvluguuKhutulyu);
  }
);

router.post(
  "/ajilDuusgaya/:turul/:ajiliinId/:exp/:tuluvluguuniiId",
  tokenShalgakh,
  async (req, res, next) => {
    mongoTransaction(req, res, next, ajilDuusgaya, tuluvluguuDuusgaya);
  }
);

module.exports = router;
