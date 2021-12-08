const express = require("express");
const router = express.Router();
const Ajiltan = require("../models/ajiltan");

const { crud } = require("../components/crud");

const {
  ajiltanNevtrey,
  tokenoorAjiltanAvya,
} = require("../controller/ajiltan");
const { tokenShalgakh } = require("../middleware/tokenShalgakh");

crud(router, "ajiltan", Ajiltan);

router.put(`/ajiltan/tokhirgoo/:id`, tokenShalgakh, async (req, res, next) => {
  try {
    console.log(req.body);
    Ajiltan.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body
    )
      .then((result) => {
        res.send("Amjilttai");
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
});

router.route("/ajiltanNevtrey").post(ajiltanNevtrey);

router.route("/tokenoorAjiltanAvya").post(tokenoorAjiltanAvya);

module.exports = router;
