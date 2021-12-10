const express = require("express");
const app = express();
const cors = require("cors");
const { filterData } = require("./utils/cleanData");
const mongoose = require("mongoose");
const Currency = require("./model/Currency");
const Dates = require("./model/Date");

app.use(express.json());
app.use(cors());

// app.get("/api/addresses", (req, res) => {
//   res.status(200).send(addresses);
// });

//conect to database
mongoose.connect(
  "mongodb://localhost/currencyRates",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "Connected true");
  }
);

app.post("/", async (req, res) => {
  const { body } = req;

  const filteredData = filterData(body);
  await Dates.insertMany(filterData.rates);
  console.log(filteredData, "filterData");
  // const finalData = await Currency.insertMany(filteredData);

  // console.log("Final Data", finalData);
  // res.status(201).send(finalData);
});

app.listen(8001, () => {
  console.log("Port is listening on 8001");
});
