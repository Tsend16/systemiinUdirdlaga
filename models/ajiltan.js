const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const ajiltanSchema = new Schema(
  {
    id: String,
    ner: String,
    ovog: String,
    utas: String,
    mail: String,
    nevtrekhNer: String,
    register: String,
    ajildOrsonOgnoo: Date,
    khayag: String,
    erkh: String,
    albanTushaal: String,
    nuutsUg: {
      type: String,
      select: false,
    },
    zurgiinNer: String,
    tsonkhniiErkhuud: [String],
  },
  { timestamps: true }
);

ajiltanSchema.index({ "$**": "text", nuutsUg: -1 });
ajiltanSchema.methods.tokenUusgeye = function () {
  const token = jwt.sign(
    { id: this._id, turul: "ajiltan" },
    "dAjiltanTokenKey",
    {
      expiresIn: "12h",
    }
  );
  return token;
};

ajiltanSchema.pre("save", async function () {
  this.indexTalbar = this.baiguullagiinId + this.mail;
  const salt = await bcrypt.genSalt(12);
  this.nuutsUg = await bcrypt.hash(this.nuutsUg, salt);
});

ajiltanSchema.pre("updateOne", async function () {
  this.indexTalbar = this._update.baiguullagiinId + this._update.mail;
  const salt = await bcrypt.genSalt(12);
  this._update.nuutsUg = await bcrypt.hash(this._update.nuutsUg, salt);
});

ajiltanSchema.methods.passwordShalgaya = async function (pass) {
  return await bcrypt.compare(pass, this.nuutsUg);
};

const AjiltanModel = mongoose.model("ajiltan", ajiltanSchema);

AjiltanModel.estimatedDocumentCount(function (err, count) {
  console.dir(err);
  console.dir(count);

  if (count == 0) {
    AjiltanModel.create(
      new AjiltanModel({
        erkh: "DeedAdmin",
        ner: "Lamkhai",
        ovog: "Bogd",
        utas: "88834140",
        mail: "Admin",
        nevtrekhNer: "Admin",
        nuutsUg: "123",
      })
    );
  }
});

module.exports = AjiltanModel;
