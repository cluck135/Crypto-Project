const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['c624nr2ad3iacs6135n0'];
api_key.apiKey = "c624nr2ad3iacs6135n0" // Replace this
const finnhubClient = new finnhub.DefaultApi()

// Stock candles
finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
    console.log(data)
});

//Company News
finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data)
    }
});
