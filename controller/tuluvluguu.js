const tuluvluguu = require("../models/tuluvluguu");

const tuluvluguuKhutulyu = async (req, res, next) => {
  const ajilModified = await tuluvluguu.updateOne(
    {
      _id: req.params.tuluvluguuniiId,
    },
    { $inc: { yavtsiinDun: req.params.exp } }
  );
  return ajilModified?.ok !== 1 && ajilModified?.nModified !== 1;
};

const tuluvluguuDuusgaya = async (req, res, next) => {
  const tuluvluguuModified = await tuluvluguu.updateOne(
    {
      _id: req.params.tuluvluguuniiId,
    },
    {
      $inc: {
        guitsetgeliinDun: req.params.exp,
        yavtsiinDun: -req.params.exp,
      },
    }
  );
  return tuluvluguuModified?.ok !== 1 && tuluvluguuModified?.nModified !== 1;
};
exports.tuluvluguuDuusgaya = tuluvluguuDuusgaya;
exports.tuluvluguuKhutulyu = tuluvluguuKhutulyu;
