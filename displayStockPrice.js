import getStockPrice from "./fakeStockAPI.js";

const {name,sym} = getStockPrice()
let price = 0
let symbolWithPrice = ""


const id =  setInterval(() => {
    
    let nowPrice = getStockPrice().price
    if (nowPrice > price){
        symbolWithPrice = nowPrice+" Up"
    }
    else {
        symbolWithPrice = nowPrice+" Down"
    }

    console.log(`Name : ${name}\nSymbol : ${sym}\nPrice : ${symbolWithPrice}\nTime : ${getStockPrice().time}
    `);
    price = nowPrice
}, 1500);
