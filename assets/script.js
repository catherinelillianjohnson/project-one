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


