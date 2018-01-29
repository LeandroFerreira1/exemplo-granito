function SA_GoogleMaps(){

var myLatlng = new google.maps.LatLng(-20.80146,-41.1548273);

    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false,
        panControl: false,
        mapTypeControl: true,
        styles: [
            {
                stylers: [
                    {saturation: -50}
                ]
            },
            {
                featureType: 'water',
                stylers: [
                    {color: '#008066'}
                ]
            }
        ],

        zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}

    }

    var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

    google.maps.event.addDomListener(window, 'resize', function(){
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

    var marcador = new google.maps.Marker({
        position: myLatlng,

        map: map,
        icon: 'img/pin.png',
        title: 'Granito'
    });

}

function SA_LoadGoogleMaps(){
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAfm6swx2tzFW9bIGphqNK_S1J7haJzy1Y&sensor=true&callback=SA_GoogleMaps";
  document.body.appendChild(script);
}

window.onload = SA_LoadGoogleMaps;
