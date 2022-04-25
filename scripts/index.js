// Store the wallet amount to your local storage with key "amount"
function addtoWallet()
{
    var wallet =JSON.parse(localStorage.getItem("wallet"));
    var amount = wallet + Number((document.getElementById("amount").value));
    localStorage.setItem("wallet",JSON.stringify(Number(amount)));
    document.getElementById("wallet").append(amount);
}
