function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5; /*entre + zoom, + localizado */
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	}); /*se muestra en el div id= map */

function buscar(){ /*obtiene ubicacion actual */
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(functionExito, funcionError);
	} /*exito si usuario autoriza ubicacion, error si no */
}
document.getElementById("encuentrame").addEventListener("click", buscar);

var latitud,longitud;

var functionExito = function(posicion) {
	latitud = posicion.coords.latitude;
	longitud = posicion.coords.longitude;

var miUbicacion = new google.maps.Marker({
	position: {lat: latitud, lng: longitud},
	animation: google.maps.Animation.DROP,
	map: map
});
/*marcador de ubicacion*/

	map.setZoom(17);
	map.setCenter({lat:latitud, lng:longitud});
} /*aumenta profundidad de ubicacion y asigna un nuevo centro*/

var funcionError = function (error) {
	alert("Tenemos un problema con encontrar tu ubicación");
} /*mensaje en caso de fallar geolocation */
}