<<<<<<< HEAD
function initMap() {
    var myLatLng = { lat: -25.363, lng: 131.044 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}
=======


      function initMap() {
        var myLatLng = {lat: 32.842674, lng:  -117.257767};

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
>>>>>>> a562dba916dcd3f92850db2476ac56bced92bc41
