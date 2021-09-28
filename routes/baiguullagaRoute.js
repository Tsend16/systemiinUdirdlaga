const express = require("express");
const router = express.Router();
const Baiguullaga = require("../models/baiguullaga");
const { crud } = require("../components/crud");
const aldaa = require("../components/aldaa");

const http = require("http");

const {
  baiguullagiinDuusakhKhugatsaaAvya,
} = require("../controller/baiguullagiinLicense");
const { tokenShalgakh } = require("../middleware/tokenShalgakh");

crud(router, "baiguullaga", Baiguullaga, async (req, res, next) => {
  console.log("data", req.body);
  var port = 8080;
  if (req.body.systemuud && Array.isArray(req.body.systemuud) && req.body.systemuud.includes("Turees"))
    port = 8081;
  const data = new TextEncoder().encode(JSON.stringify(req.body));
  const options = {
    hostname: "127.0.0.1",
    port: port,
    path: "/baiguullagaBurtgekh",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const request = http.request(options, (response) => {
    response.on("data", (d) => {
      console.log(res.statusCode);
      if (res.statusCode == 200) next();
    });
  });

  request.on("error", (error) => {
    next(new aldaa(error));
  });

  request.write(data);
  request.end();
});

router
  .route("/baiguullagiinDuusakhKhugatsaaAvya")
  .get(baiguullagiinDuusakhKhugatsaaAvya);

router.post("/licenseSungaya", tokenShalgakh, (req, res, next) => {
  try {
    console.log(req.body);
    Baiguullaga.findOneAndUpdate({
      _id: req.body.baiguullagiinId
    }, {
      $set: {
        "license.duusakhOgnoo": req.body.ognoo
      }
    }, {
      upsert: true
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
