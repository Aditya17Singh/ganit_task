var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var datesSchema = new Schema({
  dates: [
    {
      "yyyy-dd-mm": {
        AUD: { type: Number },
        BGN: { type: Number },
        BRL: { type: Number },
        CAD: { type: Number },
        CHF: { type: Number },
        CNY: { type: Number },
        CZK: { type: Number },
        DKK: { type: Number },
        GBP: { type: Number },
        HKD: { type: Number },
        HRK: { type: Number },
        HUF: { type: Number },
      },
    },
  ],
});
module.exports = mongoose.model("Dates", datesSchema);
