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
  

  