var spoontacularAPI = "apiKey=7474228d0aa440408c3a09da9a064abe";
var rootURL = "https://api.spoonacular.com/recipes/complexSearch?";
var searchBtn = $("#search-btn");
var mealList = $("meal");

var EdamamUrl ="https://api.edamam.com/api/food-database/v2/parser?"
var app_id="app_id=7cf60948"
var app_key="&app_key=7a0e4d80d09649c34f64dba432baa17e"

var ingr = "chicken"


function search(food) {
  fetch(rootURL + spoontacularAPI + "&query=" + food + "&fillIngredients=true")
  .then(function(response){
    return response.json();
  }) 
  .then(function(data) {
 
    
   var randomRecipe = data.results[Math.floor(Math.random() * data.results.length)];
 
  console.log(randomRecipe.title);
  console.log(randomRecipe.image)
   

    for (let i = 0; i < randomRecipe.missedIngredients.length; i++) {
      console.log(randomRecipe.missedIngredients[i].name);
      console.log(randomRecipe.missedIngredients[i].image);
    };
    

    $("#search-history").append(data.results);

    // Edamam API fetches ingredients calorie count

    for (let i = 0; i < randomRecipe.missedIngredients.length; i++) {



      ingr = randomRecipe.missedIngredients[i].name
    
      fetch (EdamamUrl + app_id + app_key + "&ingr=" + ingr)
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
    
        var calories = data.parsed[0].food.nutrients.ENERC_KCAL

        var ingredientEl = document.createElement("li") 
        var caloriesEl = document.createElement("p")
        var ingredientNameElement = document.createElement("p")
        console.log(randomRecipe.missedIngredients[i])
        ingredientNameElement.textContent = randomRecipe.missedIngredients[i].name
        caloriesEl.textContent = calories
        ingredientEl.appendChild(ingredientNameElement)
        ingredientEl.appendChild(caloriesEl)
        document.getElementById("ingredient-list").appendChild(ingredientEl)

     
        
    
      })
      
    }

  });

};


var arrayOfIngredients = ['ingredient1', 'ingredient2', 'ingredient3'];
var randomIngredient = arrayOfIngredients[Math.floor(Math.random() * arrayOfIngredients.length)];

searchBtn.on("click", function(event) {
  event.preventDefault();
  // .trim takes out the white spaces like if you add a space when searching
  var food = $("#search").val().trim();
  search(food);
  $("#search").val("");
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("search-btn");
var span = document.getElementsByClassName("close")[0];

 btn.onclick = function() {
     modal.style.display = "block";
 
 }
 span.onclick = function() {
     modal.style.display = "None";
 }

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

