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

router.post("/khyanakhSambariinUgugdulAvya", (req, res, next) => {
  const data = new TextEncoder().encode(
    JSON.stringify({
      ner: "Buy the milk 🍼",
      khayag: "Buy the milk 🍼",
      mail: "Buy the milk 🍼",
      register: "Buy the milk 🍼",
    })
  );

  const options = {
    hostname: "127.0.0.1",
    port: 8081,
    path: "/baiguullagaBurtgekh",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  const request = http.request(options, (response) => {
    console.log(`statusCode: ${res.statusCode}`);

    response.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.write(data);
  request.end();
  res.send({});
});
router
  .route("/baiguullagiinDuusakhKhugatsaaAvya")
  .get(baiguullagiinDuusakhKhugatsaaAvya);
module.exports = router;
