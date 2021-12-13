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
    const fajil = await ajil.findOne({ _id: req.params.ajiliinId });
    mongoTransaction(
      req,
      res,
      next,
      (...p) => ajilEkhluulya(...p, fajil),
      (...p) => tuluvluguuKhutulyu(...p, fajil)
    );
  }
);

router.post(
  "/ajilDuusgaya/:turul/:ajiliinId/:exp/:tuluvluguuniiId",
  tokenShalgakh,
  async (req, res, next) => {
    const fajil = await ajil.findOne({ _id: req.params.ajiliinId });
    mongoTransaction(
      req,
      res,
      next,
      (...p) => ajilDuusgaya(...p, fajil),
      (...p) => tuluvluguuDuusgaya(...p, fajil)
    );
  }
);

module.exports = router;
