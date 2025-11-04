function getStockPrice() {
  return {
    name: "TataGold",
    sym: "TG",
    price: (Math.random() * 3).toFixed(2),
    time: getTime(),
  };
}

function getTime() {
  const now = new Date();
  let hours = now.getHours();

  if (hours > 12) {
    hours = (hours - 12).toString().padStart(2, "0");
  }
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}


export default getStockPrice