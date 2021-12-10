var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var currencySchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  base: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  dates: { type: Schema.Types.ObjectId, ref: "Dates", required: true },
});
module.exports = mongoose.model("Currency", currencySchema);
