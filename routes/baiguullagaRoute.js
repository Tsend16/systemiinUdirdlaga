const express = require("express");
const router = express.Router();
const Baiguullaga = require("../models/baiguullaga");
const { crud } = require("../components/crud");
const aldaa = require("../components/aldaa");
const multer = require("multer");
const storage = multer.memoryStorage();
const fs = require("fs");
const upload = multer({
  storage: storage
});

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

router.post("/dllKhadgalya", upload.single("file"), tokenShalgakh, async (req, res, next) => {
  try {
    if (req.file) {
      await fs.writeFileSync("../ebarimt/ebarimt/poslib/" + req.body.barilgiinId + ".so", req.file.buffer);
      res.send("Amjilttai");
    }
    else
      throw new aldaa("file oldsongui");
  } catch (error) {
    next(error);
  }
});


router.post("/baiguullagaAvya", tokenShalgakh, (req, res, next) => {
  try {
    console.log("data", req.body);
    var port = 8080;
    if (req.body.system && req.body.system === "Turees")
      port = 8081;
    const data = new TextEncoder().encode(JSON.stringify(req.body));
    const options = {
      hostname: "127.0.0.1",
      port: 8081,
      path: "/baiguullagaAvya",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const request = http.request(options, (response) => {
      response.on("data", (d) => {
        console.log(res.statusCode);
        if (res.statusCode == 200) res.send(d);
      });
    });

    request.on("error", (error) => {
      next(new aldaa(error));
    });

    request.write(data);
    request.end();
  } catch (error) {
    next(error);
  }
});


module.exports = router;
