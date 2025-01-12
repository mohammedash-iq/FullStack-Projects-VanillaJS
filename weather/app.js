const searchBtn =document.querySelector("#searchBtn");
const searchInput = document.querySelector('#searchInput')
const url ="http://api.weatherstack.com/current? access_key = YOUR_ACCESS_KEY& query = New York";
let promise =fetch(url)
searchBtn.addEventListener('click',()=>{
    console.log(searchInput.value);

})