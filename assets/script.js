<<<<<<< HEAD
// Kroger API


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand={{BRAND}}&filter.term={{TERM}}&filter.locationId={{LOCATION_ID}}",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "dGFzdHlyZWNpcGVnZW5lcmF0b3ItY2FhNjVmMzVlOGRhZmNlNzRkYzc5Y2I4YzE3MTg1NGM1OTIwMjM4MzQ3MDYwOTU5MjkzOldIajF1YWZQVDZHT1lGekN6VFZka0tMN2owckNHdllCNTMyejN5TVM="
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  

  
=======
var spoontacularAPI = "apiKey=8f6102895a99438d990df314e0de78d0";
var rootURL = "https://api.spoonacular.com/recipes/complexSearch?";

var searchBtn = $("search-btn");
var mealList = $("meal");



function search(food) {
  fetch(rootURL + spoontacularAPI + "&query=" + food)
  .then(function(response){
    return response.json();
  }) 
  .then(function(data) {
    console.log(data.results);
  })
}

$("#search-btn").on("click", function(event) {
  event.preventDefault();
  // .trim takes out the white spaces like if you add a space when searching
  var food = $("#search").val().trim();
  search(food)
  console.log(food)
  $("#search").val("")
})


>>>>>>> 7dae807b115ec93f70af558d2c02caa8244420fd
