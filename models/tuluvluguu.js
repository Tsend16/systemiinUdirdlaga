const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const tuluvluguuSchema = new Schema(
  {
    system: String,
    ner: String,
    tailbar: String,
    delgerenguiTailbar: String,
    /**Хийгдэх ажил нь нийт хэдэн нэгжийн ажил вэ гэдэгийг тодорхойлно */
    unelgee: Number,
    /**Хийгдсэн ажилийн нэгж дүн */
    guitsetgeliinDun: Number,
    /**Хийгдэж байгаа ажилийн нэгж дүн */
    yavtsiinDun: Number,
    /**Төлөвлөгөөт ажилийн дуусах огноо*/
    duusakhOgnoo: Date,
  },
  { timestamps: true }
);

const tuluvluguuModel = mongoose.model("tuluvluguu", tuluvluguuSchema);

module.exports = tuluvluguuModel;
