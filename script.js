const Web3 = require("web3");
const {accounts} = require("./accounts");

// let web3 = new Web3(new Web3.providers.HttpProvider('HTTP://0.0.0.0:7545'));
var web3 = new Web3("http://127.0.0.1:7545");
// beforeEach( () => {
//     web3.eth.getAccounts().then((fetchedAccounts) =>{
//          console.log(fetchedAccounts);
//     });
//   })

web3.eth.getAccounts().then((fetchedAccounts) =>{
    console.log(fetchedAccounts);
});
console.log(web3.eth.accounts);
function mainEnter() {
        web3.eth.getAccounts(function(error, result) {
        web3.eth.sendTransaction(
            {
            from:accounts[0],
            to:accounts[2],
            value:  "1000000000000000000", 
            data: "0xdf"
                }, function(err, transactionHash) {
          if (!err)
            console.log(transactionHash + " success"); 
        });
    });

}
// mainEnter();
