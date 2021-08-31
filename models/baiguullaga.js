const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const baiguullagaSchema = new Schema(
  {
    id: String,
    ner: String,
    khayag: String,
    mail: String,
    register: String,
    utas: String,
    zurgiinNer: String,
    systemuud: [String],
    bairshil: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("baiguullaga", baiguullagaSchema);
