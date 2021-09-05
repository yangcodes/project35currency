async function getExchangeRate(fromCurrency, toCurrency) {
  const response = await fetch(
    "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1"
  );

  const currencyData = await response.json();
  const currencyRates = currencyData.rates;
  const baseCurrency = 1 / currencyRates[fromCurrency];
  const getExchangeRate = baseCurrency * currencyRates[toCurrency];

  if (isNaN(exchangeRate)) {
    console.log("Error");
  }
  return exchangeRate;
}

getExchangeRate("AFN", "USD").then((result) => console.log(result));
