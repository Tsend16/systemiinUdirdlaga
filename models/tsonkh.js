const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const tsonkhSchema = new Schema(
  {
    system: String,
    zam: String,
    ner: String,
    tailbar: String,
  },
  { timestamps: true }
);

const tsonkhModel = mongoose.model("tsonkh", tsonkhSchema);

module.exports = tsonkhModel;
