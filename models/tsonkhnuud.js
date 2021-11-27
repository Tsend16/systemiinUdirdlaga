const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const tsonkhnuudSchema = new Schema(
  {
    system: String,
    zam: String,
    ner: String,
    tailbar: String,
  },
  { timestamps: true }
);

const tsonkhnuudModel = mongoose.model("tsonkhnuud", tsonkhnuudSchema);

module.exports = tsonkhnuudModel;
