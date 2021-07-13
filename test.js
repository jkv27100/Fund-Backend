const fetch = require("node-fetch");
const Web3 = require("web3");
let web3 = new Web3("http://127.0.0.1:7545");

const converter = async(val) => {
    let response = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=INR&api_key=665b5772ed67deba30dc1d011573ca0fa5b909995eeb994bfe47b815787fdc7f");
    let data = await response.json();
    let ethVal = data.ETH.INR;
    let inr = 1 / Math.floor(ethVal);
    console.log(inr * val);
    let stringVal = (inr * val).toString();
    const weiVal = Web3.utils.toWei(stringVal, 'ether');
    console.log(weiVal);
 
}
converter(5000);