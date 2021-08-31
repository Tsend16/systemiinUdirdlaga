const express = require("express");
const multer = require("multer");
const router = express.Router();
const ajiltan = require("../models/ajiltan");
const khuudaslalt = require("../components/khuudaslalt");
const { tokenShalgakh } = require("../middleware/tokenShalgakh");
const aldaa = require("../components/aldaa");
const jwt = require("jsonwebtoken");

router.post("/ajiltanNevtrey", (req, res, next) => {
  ajiltan.findOne()
        .select("+nuutsUg")
        .where("mail")
        .equals(req.body.mail)
        .then(async(result)=>{
          console.log('result',result)
          if (!result)
            throw new aldaa('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!');
          var ok = await result.passwordShalgaya(req.body.nuutsUg);
          if (!ok)
            throw new aldaa('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!');
          const jwt = result.tokenUusgeye();
          res.status(200).json({
            success: true,
            token: jwt,
            result: result,
          });
        })
        .catch((err) => {
            next(err);
        });
});

router.post("/tokenoorShalgaya", (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Энэ үйлдлийг хийх эрх байхгүй байна!", 401);
    }
    const token = req.headers.authorization.split(" ")[1];
    const tokenObject = jwt.verify(token, "tokenUusgexTest0123", 401);
    console.log(tokenObject);
    if (tokenObject.id == "zochin")
      throw new Error("Энэ үйлдлийг хийх эрх байхгүй байна!", 401);
    ajiltan
      .findById(tokenObject.id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log("aldaa");
        next(err);
      });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
