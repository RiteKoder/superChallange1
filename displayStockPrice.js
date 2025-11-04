import getStockPrice from "./fakeStockAPI.js";

const { name, sym } = getStockPrice();
let price = 0;
let symbolWithPrice = "";

const id = setInterval(() => {
  let { price: nowPrice, time } = getStockPrice();

  //   if (nowPrice > price) {
  //     symbolWithPrice = nowPrice + " Up";
  //   } else {
  //     symbolWithPrice = nowPrice + " Down";
  //   }
  symbolWithPrice = nowPrice > price ? nowPrice + " Up" : nowPrice + " Down";

  console.log(`Name : ${name}\nSymbol : ${sym}\nPrice : ${symbolWithPrice}\nTime : ${time}
    `);
  price = nowPrice;
}, 2000);
