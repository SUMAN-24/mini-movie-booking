// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

// document.getElementById("wallet").innerHTML="";
var wallet =JSON.parse(localStorage.getItem("wallet"));
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
    let seats = document.getElementById("number_of_seats").value;
let price = 100*seats;

    if(wallet==null || wallet<price)
    {
        alert("Insufficient Balance!");
    }
    else{
      
        alert("Booking successful!");
        new_price = wallet-price;
        localStorage.setItem("wallet",JSON.stringify(new_price));
        new_wallet = JSON.parse(localStorage.getItem("wallet"));
        document.getElementById("wallet").innerHTML="";
        document.getElementById("wallet").append(new_wallet);
    }

}