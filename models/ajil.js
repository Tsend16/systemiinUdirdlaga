const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const tsonkhSchema = new Schema(
  {
    system: String,
    kod: String,
    ner: String,
    tailbar: String,
    tuluv: {
      type: String,
      enum: ["ekhelsen", "duussan", "butsaasan"],
    },
    tuukh: [Schema.Types.Mixed],
    frontKhugjuulegch: String,
    backKhugjuulegch: String,
    chat: [Schema.Types.Mixed],
    ekhelsenOgnoo: Date,
    yaaraltaiEsekh: Boolean,
    duusakhYostoiOgnoo: Date,
    backiinMedeelel: [
      {
        serviceName: String,
        tailbar: String,
        parameteruud: [
          {
            talbar: String,
            tailbar: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const tsonkhModel = mongoose.model("tsonkh", tsonkhSchema);

module.exports = tsonkhModel;
