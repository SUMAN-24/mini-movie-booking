// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

// document.getElementById("wallet").innerHTML="";
var wallet =JSON.parse(localStorage.getItem("amount"));
if(wallet==null)
{
    document.getElementById("wallet").append(0);
}
else{
    document.getElementById("wallet").append(wallet);
}

let movie = JSON.parse(localStorage.getItem("movie")) || [];
let movies=[];
movies.push(movie);
function displaydata(items)
{
    document.getElementById("movie").innerHTML="";

    items.map(function(el){
        div = document.createElement("div");

        title = document.createElement("p");
        title.innerText = el.Title;

        img = document.createElement("img");
        img.src = el.Poster;

        div.append(title,img);
        document.getElementById("movie").append(div);
    });
}
displaydata(movies);


function confirm()
{
    var wallet =JSON.parse(localStorage.getItem("amount"));
    let seats = Number(document.getElementById("number_of_seats").value);
    let price = 100*seats;

    if(wallet==null || wallet<price)
    {
        alert("Insufficient Balance!");
    }
    else{
        document.getElementById("wallet").innerHTML="";
        alert("Booking successful!");
        new_price = wallet-price;
        localStorage.setItem("amount",JSON.stringify(new_price));
        new_wallet = JSON.parse(localStorage.getItem("amount"));
        
        document.getElementById("wallet").append(new_wallet);
    }

}