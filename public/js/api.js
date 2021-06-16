//const express = require('express');
//const app = express();
//require('dotenv').config();

//! add api key to .env 
//const stockUrl = `https://cloud.iexapis.com/v1/stock/aapl/quote?token=${process.env.API_KEY}`;


let currentFiat;
let companyName;
let fiatSymbol;
let searchBtn = document.getElementById('search-btn');
let symbol = document.getElementById('symbol1')

const getStock = async (stockName) => {
    try{
        const stockUrl = `https://cloud.iexapis.com/stable/stock/${stockName}/quote?token=pk_ad61d387145f4bdeaaf6bd8749ddff4f`;
        const stockReq = await fetch(stockUrl);
        const stockRes = await stockReq.json();
        currentFiat = stockRes.latestPrice;
        companyName = stockRes.companyName;
        fiatSymbol = stockRes.symbol;
        var asset = {
            comapany_name:stockRes.companyName,
            stock_symbol:stockRes.symbol,
            current_price:stockRes.latestPrice,
        }
        console.log(asset)
        return stockRes;
    } catch (err) {
        console.log(err)
    }
};


searchBtn.addEventListener('click', () => {
    let symbolSearch = document.getElementById('symbol-search').value;
    console.log(symbolSearch)

    getStock(symbolSearch).then((data) => {
    
    })
 //   symbol.innerHTML = symbolSearch.value;
    console.log(symbol)
}) 