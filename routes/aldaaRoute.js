const express = require("express");
const router = express.Router();
const khuudaslalt = require("../components/khuudaslalt");
const Aldaa = require("../models/aldaa");

router.post(
  "/aldaa",
  async (req, res, next) => {
    try {
      console.log("orj irlee", req.body);
      const data = new Aldaa(req.body);
      data
        .save()
        .then((result) => {
          res.send("Amjilttai");
        })
        .catch((err) => {
          next(err);
        });
    } catch (error) {
      next(error);
    }
  }
);
router.put("/aldaa/:id", async (req, res, next) => {
  try {
    const data = new Aldaa(req.body);
    Aldaa.updateOne(
      {
        _id: req.params.id,
      },
      data
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

router.get("/aldaa", async (req, res, next) => {
  try {
    const body = req.query;
    if (!!body?.query) body.query = JSON.parse(body.query);
    if (!!body?.order) body.order = JSON.parse(body.order);
    if (!!body?.khuudasniiDugaar)
      body.khuudasniiDugaar = Number(body.khuudasniiDugaar);
    if (!!body?.khuudasniiKhemjee)
      body.khuudasniiKhemjee = Number(body.khuudasniiKhemjee);
    if (!!body?.search) body.search = String(body.search);
    khuudaslalt(Aldaa, body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
});
router.get("/aldaa/:id", async (req, res, next) => {
  try {
    Aldaa.findOne({
      _id: req.params.id,
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
});
router.delete("/aldaa/:id", async (req, res, next) => {
  try {
    Aldaa.deleteOne({
      _id: req.params.id,
    })
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
module.exports = router;
