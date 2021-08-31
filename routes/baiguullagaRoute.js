const express = require("express");
const router = express.Router();
const Baiguullaga = require("../models/baiguullaga");
const { crud } = require("../components/crud");
var request = require("request");
const {
  baiguullagiinDuusakhKhugatsaaAvya,
} = require("../controller/baiguullagiinLicense");
const { tokenShalgakh } = require("../middleware/tokenShalgakh");

crud(router, "baiguullaga", Baiguullaga, async (req, res, next) => {
  request({
    method: "POST",
    uri: "localhost:8081/baiguullaga",
    qs: req.body,
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        next();
      } else {
        throw new aldda(error);
      }
    },
  });
});

router.post(
  "/khyanakhSambariinUgugdulAvya",
  tokenShalgakh,
  (req, res, next) => {
    res.send({});
  }
);
router
  .route("/baiguullagiinDuusakhKhugatsaaAvya")
  .get(baiguullagiinDuusakhKhugatsaaAvya);
module.exports = router;
