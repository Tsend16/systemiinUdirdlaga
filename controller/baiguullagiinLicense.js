const asyncHandler = require("express-async-handler");
const Ajiltan = require("../models/ajiltan");
const Baiguullaga = require("../models/baiguullaga");
const aldaa = require("../components/aldaa");
const jwt = require("jsonwebtoken");

exports.baiguullagiinDuusakhKhugatsaaAvya = asyncHandler(
  async (req, res, next) => {
    var baiguullaga = await Baiguullaga.findOne({"register" : req.body.register});
    if (baiguullaga == null) throw new aldaa("Байгууллага буруу байна!");
    if (baiguullaga.license == null)
      throw new aldaa("Лицензийн мэдээлэл олдсонгүй!");
    res.send(baiguullaga.license.duusakhOgnoo);
  }
);
