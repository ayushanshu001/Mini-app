// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var data=JSON.parse(localStorage.getItem("amount"))

console.log(data)

document.getElementById("wallet").innerText=data

async function Searchmovies(){

    

    let input=document.getElementById("search").value
    fetch(`http://www.omdbapi.com/?s=${input}&page=1&apikey=29fa39ed`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res)
        appendmovies(res)
    })
   





}
Searchmovies()
// https://www.omdbapi.com/?i=tt3896198&apikey=b7d7c34c&t&${input}
// image, title and a “book now
function appendmovies(res){

    if(res==undefined)
    {
        return false
    }
    let box=document.createElement("div")

    var name=document.createElement("img")
    name.innerText=res.Poster

    box.append(name)
    document.getElementById("movies").append(box)
    

}


