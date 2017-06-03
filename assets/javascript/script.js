var zip = $("#zip-input");
var searchTerm = $("#search-term");
var map;
var latitude = [];
var long = [];
var initialMapP = 0;
var jobs = [];

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
        marker.addListener('click', function() {
            map.setZoom(10);
            map.setCenter(marker.getPosition());
            var infowindow = new google.maps.InfoWindow({
                content: "Here's a job"
            });
            infowindow.open(marker.get('map'), marker);
        });
    }

}
