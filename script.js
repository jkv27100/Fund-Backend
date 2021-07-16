const Web3 = require("web3");
const {accounts} = require("./accounts");
const fetch = require("node-fetch");
// let web3 = new Web3(new Web3.providers.HttpProvider('HTTP://0.0.0.0:7545'));
// var web3 = new Web3("http://127.0.0.1:7545");
// // beforeEach( () => {
// //     web3.eth.getAccounts().then((fetchedAccounts) =>{
// //          console.log(fetchedAccounts);
// //     });
// //   })

// web3.eth.getAccounts().then((fetchedAccounts) =>{
//     console.log(fetchedAccounts);
// });
// console.log(web3.eth.accounts);
// function mainEnter() {
//         web3.eth.getAccounts(function(error, result) {
//         web3.eth.sendTransaction(
//             {
//             from:accounts[0],
//             to:accounts[2],
//             value:  "1000000000000000000", 
//             data: "0xdf"
//                 }, function(err, transactionHash) {
//           if (!err)
//             console.log(transactionHash + " success"); 
//         });
//     });

// }
// // mainEnter();

// const fetchLocation = async () => {
//     const url = 'http://api.positionstack.com/v1/reverse?access_key=307964d026498c86a0fa9c84b4381213&query=12.8936221,74.8494338'
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
// }
// fetchLocation();


