const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
var license = new Schema({});
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
    license: {
      duusakhOgnoo: {
        type: Date,
        required: true,
      },
      moduluud: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("baiguullaga", baiguullagaSchema);
