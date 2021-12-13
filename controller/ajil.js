const ajil = require("../models/ajil");

const ajilEkhluulya = async (req, res, next) => {
  const ajilModified = await ajil.updateOne(
    {
      _id: req.params.ajiliinId,
    },
    {
      $set: { [`${req.params.turul}Tuluv`]: "ekhelsen", tuluv: "ekhelsen" },
    }
  );
  return ajilModified?.ok !== 1 && ajilModified?.nModified !== 1;
};

const ajilDuusgaya = async (req, res, next, fajil) => {
  const update = {};
  update[`${req.params.turul}Tuluv`] = "duussan";
  if (
    !fajil[`${req.params.turul === "front" ? "back" : "front"}Khugjuulegch`] ||
    fajil[`${req.params.turul === "front" ? "back" : "front"}Tuluv`] ===
      "duussan"
  )
    update.tuluv = "duussan";

  const ajilModified = await ajil.updateOne(
    {
      _id: req.params.ajiliinId,
    },
    {
      $set: update,
    }
  );
  return ajilModified?.ok !== 1 && ajilModified?.nModified !== 1;
};

exports.ajilEkhluulya = ajilEkhluulya;
exports.ajilDuusgaya = ajilDuusgaya;
