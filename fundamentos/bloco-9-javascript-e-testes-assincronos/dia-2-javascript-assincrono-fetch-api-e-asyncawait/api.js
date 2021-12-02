const fetchCoins = async() =>{
const url = 'https://api.coincap.io/v2/assets';
const coins = await fetch(url)
.then((response) => response.json())
.then((data)=> data.data)
.catch((error) => error.toString())

return coins;
}

const setCoins = async () =>{
  const coins = await fetchCoins();

  const coinList = document.getElementById('coins-list')
  coins.filter((coin)=> Number(coin.rank) <=10)
  .forEach((coin) => {
    const newLi = document.createElement('li')
    const usdPrice = Number(coin.priceusd);
    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinList.appendChild(newLi)
  })
}
window.onload = () => setCoins()