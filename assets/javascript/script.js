


var zip = $("#zip-input");
var searchTerm = $("#search-term");

var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4604260559721605&q=" +
    "web+develper" + "&l=" + "92129" + "&format=json&v=2&latlong=1&limit=2"

  // Performing our AJAX GET request
  $.ajax({
      url: queryURL,
      method: "GET"
}).done(function(response){
  var results = response.data;
      for (var i = 0; i < results.length; i++) {
      console.log(results[i].latitude);
    }

});
  

//   function initMap() {
//   for (var i = 0; i < results.length; i++) {
//     var myLatLng = {lat:results[i].latitude, lng: results[i].longitude};
//     var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 11,
//           center: myLatLng
//       });

//     var marker = new google.maps.Marker({
//           position: myLatLng,
//           map: map,
//           title: 'Hello World!'
//   });
//   }
// }

          

function initMap() {
    var myLatLng = { lat: 32.842674, lng: -117.257767 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

$('#user-search-button').on('click', function(event){
  event.preventDefault();
  var userJobTitle = $('#user-job-title').val();
  var userZipCode = $('#user-zip-code').val();

  // checks to see if there is content in both felds
  if(userJobTitle.length > 0 && userZipCode > 0){
    console.log("Job Title: " + userJobTitle + " Zip Code: " + userZipCode);
    // other code here
  }
  
})