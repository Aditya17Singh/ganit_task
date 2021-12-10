function filterData(payload) {
  const { amount, rates, base, start_date, end_date } = payload;

  const currencyArr = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
  ];
  const obj = {};

  Object.keys(rates).forEach((dateKey) => {
    obj[dateKey] = {};

    Object.keys(rates[dateKey]).forEach((currencyKey) => {
      if (currencyArr.includes(currencyKey)) {
        obj[dateKey][currencyKey] = rates[dateKey][currencyKey];
      }
    });
  });

  // console.log("newRatesObj", obj);

  return { amount, rates: [obj], base, start_date, end_date };
}
module.exports = { filterData };
