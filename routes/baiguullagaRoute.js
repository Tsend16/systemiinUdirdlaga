const express = require("express");
const multer = require("multer");
const router = express.Router();
const Baiguullaga = require("../models/baiguullaga");
const khuudaslalt = require("../components/khuudaslalt");
const { crudWithFile, crud } = require("../components/crud");
const { tokenShalgakh } = require("../middleware/tokenShalgakh");

crud(router, "baiguullaga", Baiguullaga);

router.post(
  "/khyanakhSambariinUgugdulAvya",
  tokenShalgakh,
  (req, res, next) => {
    res.send({});
  }
);

module.exports = router;
