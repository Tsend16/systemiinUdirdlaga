const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const ajilSchema = new Schema(
  {
    system: String,
    kod: String,
    ner: String,
    tailbar: String,
    turul: String,
    tuluv: {
      type: String,
      enum: ["ekhelsen", "duussan", "butsaasan"],
    },
    tuukh: [Schema.Types.Mixed],
    frontKhugjuulegch: String,
    backKhugjuulegch: String,
    chat: [Schema.Types.Mixed],
    frontEkhelsenOgnoo: Date,
    backEkhelsenOgnoo: Date,
    frontTuluv: {
      type: String,
      enum: ["ekhelsen", "duussan", "butsaasan"],
    },
    backTuluv: {
      type: String,
      enum: ["ekhelsen", "duussan", "butsaasan"],
    },
    duussanOgnoo: Date,
    yaaraltaiEsekh: Boolean,
    duusakhYostoiOgnoo: Date,
    tuluvluguuniiId: String,
    exp: Number,
    frontTailbar: String,
    backTailbar: String,
  },
  { timestamps: true }
);

const ajilModel = mongoose.model("ajil", ajilSchema);

module.exports = ajilModel;
