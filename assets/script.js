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
 
    
   var randomRecipe = data.results[Math.floor(Math.random() * data.results.length)]
 
 console.log(randomRecipe.title);
    for (let i = 0; i < randomRecipe.missedIngredients.length; i++) {
      console.log(randomRecipe.missedIngredients[i].name)
    }
    

    $("#search-history").append(data.results)
  })
}

var arrayOfIngredients = ['ingredient1', 'ingredient2', 'ingredient3']
var randomIngredient = arrayOfIngredients[Math.floor(Math.random() * arrayOfIngredients.length)]

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

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

