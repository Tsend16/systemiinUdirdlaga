const express = require("express");
const router = express.Router();
const { tokenShalgakh } = require("../middleware/tokenShalgakh");
const MailiinZagvar = require("../models/mailiinZagvar");
const Baiguullaga = require("../models/baiguullaga");
const MailIlgeeye = require("../components/mailIlgeeye");
const handlebars = require("handlebars");
const fs = require("fs");
const { crud } = require("../components/crud");
const formatNumber = require("../functions/formatNumber");

crud(router, "mailiinZagvar", MailiinZagvar);

router.post("/duriinMailIlgeeye", tokenShalgakh, (req, res, next) => {
  let id = req.body.id;
  let mail = req.body.mail;
  console.log("body-->", req.body);
  MailiinZagvar.findById(id)
    .then(async (result) => {
      console.log("result-->", result);
      await mailIlgeeye.mailIlgeeye(
        mail,
        result ? result.mail : null,
        result ? result.zurag : null
      );
      res.send("Amjilttai");
    })
    .catch((err) => {
      next(err);
    });
});

var readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      throw err;
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

function systemiinNerUgye(list) {
  var butsaakhUtga = "";
  try {
    if (list[0] == "Turees")
      butsaakhUtga = "Түрээсийн удирдлагын системийн төлбөр";
    else if (list[0] == "HiCar") butsaakhUtga = "HiCar системийн төлбөр";
    else if (list[0] == "Gym")
      butsaakhUtga = "Фитнессийн удирдлагын системийн төлбөр";
  } catch (err) { }
  return butsaakhUtga;
}

function nuatBodyo(bodokhDun) {
  var nuatguiDun = bodokhDun / 1.1;
  return formatNumber(bodokhDun - nuatguiDun);
}

router.post("/nekhemjlekhMailIlgeeye", async (req, res, next) => {
  var baiguullaga = await Baiguullaga.findById(req.body.id);
  var systemiinNer = systemiinNerUgye(baiguullaga.systemuud);
  var nuatDun = nuatBodyo(req.body.tulbur);
  readHTMLFile(__dirname + "/../invoice.html", async function (err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      baiguullagiinNer: baiguullaga.ner,
      baiguullagiinRegister: baiguullaga.register,
      baiguullagiinMail: baiguullaga.mail,
      baiguullagiinKhayag: baiguullaga.khayag,
      systemiinNer: systemiinNer,
      ognoo: new Date().toLocaleDateString("en-US"),
      tulbur: formatNumber(req.body.tulbur),
      nuatDun: nuatDun,
    };
    var htmlToSend = template(replacements);

    console.log("htmlToSend", htmlToSend);
    try {
      await MailIlgeeye.mailIlgeeye(baiguullaga.mail, htmlToSend, null, true);
      res.send("Amjilttai");
    } catch {
      (err) => {
        next(err);
      };
    }
  });
});

module.exports = router;
