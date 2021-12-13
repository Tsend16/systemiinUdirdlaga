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

const ajilDuusgaya = async (req, res, next) => {
  const ajilModified = await ajil.updateOne(
    {
      _id: req.params.ajiliinId,
    },
    {
      $set: { [`${req.params.turul}Tuluv`]: "duussan", tuluv: "duussan" },
    }
  );
  return ajilModified?.ok !== 1 && ajilModified?.nModified !== 1;
};

exports.ajilEkhluulya = ajilEkhluulya;
exports.ajilDuusgaya = ajilDuusgaya;
