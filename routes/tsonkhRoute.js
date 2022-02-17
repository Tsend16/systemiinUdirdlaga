const express = require("express");
const router = express.Router();
const tsonkh = require("../models/tsonkh");

const { crud } = require("../components/crud");

crud(router, "tsonkh", tsonkh);

router.get(`/tsonkhniiMedeelel/:id`, async (req, res, next) => {
    try {
        tsonkh.findOne({
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

module.exports = router;
