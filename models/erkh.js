const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const erkhSchema = new Schema(
  {
    system:String,
    ner: String,
    utga: String,
    tailbar: String,
    tsonkhuud: [Schema.Types.Mixed],
  },
  { timestamps: true }
);

const erkhModel = mongoose.model("erkh", erkhSchema);

module.exports = erkhModel;
