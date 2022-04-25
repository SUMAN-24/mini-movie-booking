// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var wallet =JSON.parse(localStorage.getItem("wallet"));
if(wallet==null)
{
    document.getElementById("wallet").append(0);
}
else{
    document.getElementById("wallet").append(wallet);
}

let id;
let movies = document.getElementById("movies");

async function searchMovies(){
    try{
        const search = document.getElementById("search").value;
        const res = await fetch(`https://www.omdbapi.com/?apikey=4ac9e285&s=${search}`);

        const data = await res.json();

        console.log("data:",data);
        const movies = data.Search;
        return movies; 
    }
    catch(error){
        console.log("error:",error);
    }
}

function appendmovies(data)
{
    if(data===undefined)
    {
        return false;
    }

    data.forEach(function(el){

        let div = document.createElement("div")
        
        let img = document.createElement("img");
        img.src = el.Poster;

        let p = document.createElement("p");
        p.innerText = el.Title;

        let button = document.createElement("button")
        button.textContent = "Book Now";
        button.className = "book_now";
        button.addEventListener("click",function(){
            localStorage.setItem("movie",JSON.stringify(el));
            window.location.href="/checkout.html";
        });

        div.append(img,p,button);
        movies.append(div);
    });
}

async function main(){
    try{
        let data = await searchMovies();
        if(data===undefined)
        {
            return false;
        }
        appendmovies(data);
    }
    catch(error){
        console.log("error:",error);
    }
}

function debounce(func, delay)
{
    console.log("id:",id);
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay);
}