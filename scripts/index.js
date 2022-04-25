// Store the wallet amount to your local storage with key "amount"
var wallet =JSON.parse(localStorage.getItem("amount"));
if(wallet==null)
{
document.getElementById("wallet").append(0);
}
else{
document.getElementById("wallet").append(wallet);
}
function addtoWallet()
{
    var wallet =JSON.parse(localStorage.getItem("amount"));
    var amount = wallet + Number((document.getElementById("amount").value));
    localStorage.setItem("amount",JSON.stringify(Number(amount)));
    document.getElementById("wallet").innerText="";
    document.getElementById("wallet").append(amount);
}
