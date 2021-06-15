//const express = require('express');
//const app = express();
//require('dotenv').config();

//! add api key to .env 
//const stockUrl = `https://cloud.iexapis.com/v1/stock/aapl/quote?token=${process.env.API_KEY}`;


let currentFiat;
let companyName;
let fiatSymbol;
let symbolSearch;
let searchBtn = document.getElementById('search-btn');
let symbol = document.getElementById('symbol1')

const getStock = async () => {
    try{
    const stockUrl = `https://cloud.iexapis.com/stable/stock/AAPL/quote?token={INSERT API KEY}`;
    const stockReq = await fetch(stockUrl);
    const stockRes = await stockReq.json();
    currentFiat = stockRes.latestPrice;
    companyName = stockRes.companyName;
    fiatSymbol = stockRes.symbol;
    return stockRes;
    } catch {
        console.log(error)
    }
};

getStock().then((data) => {
    console.log(data.symbol);

})

searchBtn.addEventListener('click', () => {
    symbol.innerHTML = symbolSearch.value;
    //console.log(symbol)
})