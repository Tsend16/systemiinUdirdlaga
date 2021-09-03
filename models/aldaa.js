const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const aldaaSchema = new Schema({
  system: String,
  aldaaniiMsg: String,
  aldaaniiKod: String,
  aldaa: Object,
  ognoo: Date,
  baiguullagiinId: String,
  baiguullagiinNer: String,
  burtgesenAjiltniiId: String,
  burtgesenAjiltniiNer: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("aldaa", aldaaSchema);