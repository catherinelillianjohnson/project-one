// Kroger API


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products?filter.brand={{BRAND}}&filter.term={{TERM}}&filter.locationId={{LOCATION_ID}}",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": ""
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  

<<<<<<< HEAD
  
=======
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


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
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

>>>>>>> de4115ae3d2187681608876f4e657deb7bf2dfbf
