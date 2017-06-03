var zip = $("#zip-input");
var searchTerm = $("#search-term");
var map;
var latitude = [];
var long = [];
var initialMapP = 0;

//jobSearch(92129, "janitor")
initMap();

function initMap() {

    if (initialMapP === 0) {
        var myLatLng = { lat: 32.7157, lng: -117.1611 };
        initialMapP++;
    } else {

        var myLatLng = { lat: latitude[0], lng: long[0] };
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLatLng
    });

    for (var i = 0; i < latitude.length; i++) {
        myLatLng = { lat: latitude[i], lng: long[i] };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,

            title: 'Hello World!'

        });
    }
}
