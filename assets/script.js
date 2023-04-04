var spoontacularAPI = "apiKey=8f6102895a99438d990df314e0de78d0";
var rootURL = "https://api.spoonacular.com/recipes/complexSearch?";
var searchBtn = $("search-btn");
var mealList = $("meal");



function search(food) {
  fetch(rootURL + spoontacularAPI + "&query=" + food + "&fillIngredients=true")
  .then(function(response){
    return response.json();
  }) 
  .then(function(data) {
    $("")
    console.log(data.results[0].title);
    console.log(data.results[0].missedIngredients[0].name)
    console.log(data.results[0].missedIngredients[1].name)
    console.log(data.results[0].missedIngredients[2].name)
    console.log(data.results[0].missedIngredients[3].name)
    console.log(data.results[0].missedIngredients[4].name)
    console.log(data.results[0].missedIngredients[5].name)
    console.log(data.results[0].missedIngredients[6].name)
    // create a for loop to create the ingredients list.
    $("#search-history").append(data.results)
  })
}



$("#search-btn").on("click", function(event) {
  event.preventDefault();
  // .trim takes out the white spaces like if you add a space when searching
  var food = $("#search").val().trim();
  search(food)
  $("#search").val("")
})


var modal = document.getElementById("myModal");
var btn = document.getElementById("search-btn");
var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
  
// }

// span.onclick = function() {
//     modal.style.display = "None";
// }

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

