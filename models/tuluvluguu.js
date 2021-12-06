const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const tuluvluguuSchema = new Schema(
  {
    system: String,
    ner: String,
    tailbar: String,
    unelgee: Number,
    guitsetgeliinDun: Number,
    duusakhOgnoo: Date,
  },
  { timestamps: true }
);

const tuluvluguuModel = mongoose.model("tuluvluguu", tuluvluguuSchema);

module.exports = tuluvluguuModel;
