import getStockPrice from "./fakeStockAPI.js";


 
const id =  setInterval(() => {
    console.log(`Name : ${getStockPrice().name}\nSymbol : ${getStockPrice().sym}\nPrice : ${getStockPrice().price}\nTime : ${getStockPrice().price}
    `);
}, 1500);
