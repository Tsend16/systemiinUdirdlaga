const asyncHandler = require("express-async-handler");
const Ajiltan = require("../models/ajiltan");
const Baiguullaga = require("../models/baiguullaga");
const aldaa = require("../components/aldaa");
const jwt = require("jsonwebtoken");

exports.baiguullagiinDuusakhKhugatsaaAvya = asyncHandler(
  async (req, res, next) => {
    console.log(req.body);
    var baiguullaga = await Baiguullaga.findOne({ "register": req.body.register });
    if (baiguullaga == null) res.send({ msg: "Байгууллага буруу байна!", success: false });
    else if (baiguullaga.license == null)
      res.send({ msg: "Лицензийн мэдээлэл олдсонгүй!", success: false });
    console.log(baiguullaga);
    res.send({ duusakhOgnoo: baiguullaga.license.duusakhOgnoo, success: true });
  }
);
