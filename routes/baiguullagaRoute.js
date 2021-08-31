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
  const data = new TextEncoder().encode(JSON.stringify(req.body));
  const options = {
    hostname: "127.0.0.1",
    port: 8081,
    path: "/baiguullagaBurtgekh",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const request = http.request(options, (response) => {
    response.on("data", (d) => {
      if (res.statusCode == 200 && d == "Amjilttai") next();
    });
  });

  request.on("error", (error) => {
    throw new aldaa(error);
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
