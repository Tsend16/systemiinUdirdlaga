const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const ajilSchema = new Schema(
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
    burtgeldKheregteiTalbaruud: [
      {
        talbar: String,
        tailbar: String,
      },
    ],
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

const ajilModel = mongoose.model("ajil", ajilSchema);

module.exports = ajilModel;
