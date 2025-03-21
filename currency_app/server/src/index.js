const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/getAllCurrencies', async (req, res) => {
    const nameURL = `https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=dc01f6708b164888a31cb594d136bf5a`;
    
    try {
        const namesResponse = await axios.get(nameURL);
        const nameData = namesResponse.data;

        return res.json(nameData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
);

app.get('/convertCurrency', async (req, res) => {
    const { date, sourceCurrency, targetCurrency, amountInSourceCurrency } = req.query;
    const convertURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=dc01f6708b164888a31cb594d136bf5a`;
 
    try {
        const convertResponse = await axios.get(convertURL);
        const convertData = convertResponse.data;
        
        const sourceRate = convertData.rates[sourceCurrency];
        const targetRate = convertData.rates[targetCurrency];
        const amountInTargetCurrency = (amountInSourceCurrency / sourceRate) * targetRate;

        return res.json({ amountInTargetCurrency: amountInTargetCurrency.toFixed(2) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    });