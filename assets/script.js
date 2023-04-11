var spoontacularAPI = "apiKey=7474228d0aa440408c3a09da9a064abe";
// spare API Key: 6d62c079711f4445911e77ede85400b1 
var rootURL = "https://api.spoonacular.com/recipes/complexSearch?";
var searchBtn = $("#search-btn");
var mealList = $("meal");
var savedBtnSection = $("#history-button-section");

var EdamamUrl ="https://api.edamam.com/api/food-database/v2/parser?"
var app_id="app_id=7cf60948"
var app_key="&app_key=7a0e4d80d09649c34f64dba432baa17e"

var recipeTitle = ""


function search(food) {
  // empties the previous results before the next search results appear
  $("#recipeImg").empty()
  $("#ingredient-list").empty()
  $("#recipeTitle").empty()

  fetch(rootURL + spoontacularAPI + "&query=" + food + "&fillIngredients=true")
  .then(function(response){
    return response.json();
  }) 
  .then(function(data) {
 
   var randomRecipe = data.results[Math.floor(Math.random() * data.results.length)];

   //local storage to save each search

   var recipeTitle = randomRecipe.title

   var savedIds = JSON.parse(localStorage.getItem(recipeTitle)) || []
   savedIds.push(randomRecipe)

   localStorage.setItem(recipeTitle,JSON.stringify(savedIds))
  
    var resultItem = document.createElement("button");
    resultItem.setAttribute("id", "history-btn");
    resultItem.setAttribute("display", "block");
    resultItem.textContent = randomRecipe.title
    $(".history-button-section").append(resultItem);

    $("#search-history").append(data.results);

    // Edamam API fetches ingredients calorie count

    for (let i = 0; i < randomRecipe.missedIngredients.length; i++) {

      var ingr = randomRecipe.missedIngredients[i].name
    
      fetch (EdamamUrl + app_id + app_key + "&ingr=" + ingr)
      .then(function(response){
        return response.json();
        
      })
      .then(function(data) {
    // append in ingredient picture, ingredient name, calorie count
        var calories = data.hints[0].food.nutrients.ENERC_KCAL
        var ingredientEl = document.createElement("li") 
        var caloriesEl = document.createElement("p")
        var ingredientPictureElement = document.createElement("img")
        var ingredientNameElement = document.createElement("p")
        ingredientNameElement.textContent = randomRecipe.missedIngredients[i].original
        caloriesEl.textContent = calories + " calories"
        ingredientPictureElement.src = randomRecipe.missedIngredients[i].image
        ingredientEl.appendChild(ingredientPictureElement)
        ingredientEl.appendChild(ingredientNameElement)
        ingredientEl.appendChild(caloriesEl)
        document.getElementById("ingredient-list").appendChild(ingredientEl)
      })
      
    }
    // append in recipe title
    var recipeTitleEl = document.getElementById("recipeTitle")
    var recipeTitle = document.createTextNode(randomRecipe.title)
    recipeTitleEl.appendChild(recipeTitle)

    // append in image of recipe
    var recipePictureElement = document.createElement("img")
    recipePictureElement.src = randomRecipe.image
    var src = document.getElementById("recipeImg")
    src.appendChild(recipePictureElement) })

  };

//to create buttons for searches already in local storage
function renderSavedItems() {

  var pcstorage = localStorage

  Object.keys(pcstorage).forEach(entry => {


    var resultItem = document.createElement("button");
    // resultItem.setAttribute("class", "history");
    resultItem.setAttribute("id", "history-btn");
    // resultItem.setAttribute("display", "block");
    resultItem.textContent = entry
    $(".history-button-section").append(resultItem);

    console.log((entry))
  })
 }

renderSavedItems()



// function for the saved recipe buttons
function reFetchRecipe(recipeName) {

$("#recipeImg").empty()
$("#ingredient-list").empty()
$("#recipeTitle").empty()

var localRecipe = JSON.parse(localStorage.getItem(recipeName)) || []

randomRecipe = localRecipe[0]

console.log(randomRecipe)

for (let i = 0; i < randomRecipe.missedIngredients.length; i++) {

  ingr = randomRecipe.missedIngredients[i].name

  fetch (EdamamUrl + app_id + app_key + "&ingr=" + ingr)
  .then(function(response){
    return response.json();
    
  })
  .then(function(data) {
// append in ingredient picture, ingredient name, calorie count
    var calories = data.hints[0].food.nutrients.ENERC_KCAL
    var ingredientEl = document.createElement("li") 
    var caloriesEl = document.createElement("p")
    var ingredientPictureElement = document.createElement("img")
    var ingredientNameElement = document.createElement("p")
    ingredientNameElement.textContent = randomRecipe.missedIngredients[i].original
    caloriesEl.textContent = calories + " calories"
    ingredientPictureElement.src = randomRecipe.missedIngredients[i].image
    ingredientEl.appendChild(ingredientPictureElement)
    ingredientEl.appendChild(ingredientNameElement)
    ingredientEl.appendChild(caloriesEl)
    document.getElementById("ingredient-list").appendChild(ingredientEl)
  })
  
}
  // append in recipe title
  var recipeTitleEl = document.getElementById("recipeTitle")
  var recipeTitle = document.createTextNode(randomRecipe.title)
  recipeTitleEl.appendChild(recipeTitle)

  // append in image of recipe
  var recipePictureElement = document.createElement("img")
  recipePictureElement.src = randomRecipe.image
  var src = document.getElementById("recipeImg")
  src.appendChild(recipePictureElement) 
  console.log("button works")
}




var arrayOfIngredients = ['ingredient1', 'ingredient2', 'ingredient3'];
var randomIngredient = arrayOfIngredients[Math.floor(Math.random() * arrayOfIngredients.length)];




searchBtn.on("click", function(event) {
  event.preventDefault();
  // .trim takes out the white spaces like if you add a space when searching
  var food = $("#search").val().trim();
  search(food);
  $("#search").val("");
});

savedBtnSection.on("click", function(event) {
  event.preventDefault();
  var recipeName = event.target.textContent
  reFetchRecipe(recipeName);
  $("#history").val("")
  console.log("button works")
});

