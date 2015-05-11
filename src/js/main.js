/* jshint devel:true */

var locations = [
	{
		"displayName": "AAMCO of Abington",
		"address": "1600 OLD YORK ROAD ABINGTON, PA 19001",
		"phone": "(855) 984-0649",
		"lat": 40.1296453,
		"lng": -75.11691400000001
	},
	{
		"displayName": "AAMCO of Cheltenham",
		"address": "570 COTTMAN AVENUE CHELTENHAM, PA 19012",
		"phone": "(855) 984-0599",
		"lat": 40.0682424,
		"lng": -75.0960397
	},
	{
		"displayName": "AAMCO of Glen Mills",
		"address": "1711 WILMINGTON PIKE GLEN MILLS, PA 19342",
		"phone": "(855) 984-0668",
		"lat": 39.8772472,
		"lng": -75.54453849999999
	},
	{
		"displayName": "AAMCO of Claymont",
		"address": "3111 PHILADELPHIA PIKE CLAYMONT, DE 19703",
		"phone": "(855) 981-6078",
		"lat": 39.79874,
		"lng": -75.46313199999997
	},
	{
		"displayName": "AAMCO of Prospect Park",
		"address": "746 CHESTER PIKE PROSPECT PARK, PA  19076",
		"phone": "(855) 984-0672",
		"lat": 39.8828922,
		"lng": -75.30462139999997
	},
	{
		"displayName": "AAMCO of Colmar",
		"address": "634 BETHLEHEM PIKE  COLMAR, PA 18915",
		"phone": "(844) 278-0062",
		"lat": 40.27844169999999,
		"lng": -75.26120279999998
	},
	{
		"displayName": "AAMCO of Delran",
		"address": "140 CARRIAGE LANE DELRAN, NJ 08075",
		"phone": "(856) 393-1059",
		"lat": 40.0098536,
		"lng": -74.96925759999999
	},
	{
		"displayName": "AAMCO of Dover",
		"address": "3729 N DUPONT HIGHWAY DOVER, DE 19901",
		"phone": "(855) 984-0637",
		"lat": 39.2027795,
		"lng": -75.56059679999998
	},
	{
		"displayName": "AAMCO of Egg Harbor Township",
		"address": "6400 BLACK HORSE PIKE EGG HARBOR TWP, NJ 08234",
		"phone": "(855) 981-1858",
		"lat": 39.42508309999999,
		"lng": -74.59281199999998
	},
	{
		"displayName": "AAMCO of Feasterville",
		"address": "92 BUSTLETON AVENUE FEASTERVILLE, PA 19053",
		"phone": "(855) 981-6105",
		"lat": 40.1379753,
		"lng": -75.00784820000001
	},
	{
		"displayName": "AAMCO of Easton",
		"address": "1458 NORTHAMPTON STREET EASTON, PA 18042",
		"phone": "(855) 981-6141",
		"lat": 40.6898279,
		"lng": -75.23176890000002
	},
	{
		"displayName": "AAMCO of Hightstown",
		"address": "400 MERCER STREET HIGHTSTOWN, NJ 08520",
		"phone": "(844) 278-0664",
		"lat": 40.2651273,
		"lng": -74.53323160000002
	},
	{
		"displayName": "AAMCO of Philadelphia",
		"address": "7716 RIDGE AVENUE PHILADELPHIA, PA 19128",
		"phone": "(844) 278-0616",
		"lat": 40.0521244,
		"lng": -75.23665189999997
	},
	{
		"displayName": "AAMCO of Morrisville",
		"address": "108 EAST TRENTON AVENUE MORRISVILLE, PA 19067",
		"phone": "(855) 205-7517",
		"lat": 40.2179974,
		"lng": -74.78101349999997
	},
	{
		"displayName": "AAMCO of Bear",
		"address": "819 PULASKI HIGHWAY BEAR, DE 19701",
		"phone": "(855) 981-6103",
		"lat": 39.6413647,
		"lng": -75.64640959999997
	},
	{
		"displayName": "AAMCO of Norristown",
		"address": "2917 HANNAH AVENUE, A & B NORRISTOWN, PA 19401",
		"phone": "(855) 984-0667",
		"lat": 40.121497,
		"lng": -75.3399048
	},
	{
		"displayName": "AAMCO of Philadelphia",
		"address": "6726 FRANKFORD AVENUE PHILADELPHIA, PA 19135",
		"phone": "(844) 278-0681",
		"lat": 40.032328,
		"lng": -75.05199499999998
	},
	{
		"displayName": "AAMCO of Philadelphia",
		"address": "4539 RISING SUN AVENUE PHILADELPHIA, PA 19140",
		"phone": "(267) 297-2828",
		"lat": 40.0197096,
		"lng": -75.1264789
	},
	{
		"displayName": "AAMCO of Pottstown",
		"address": "401 WEST HIGH STREET POTTSTOWN, PA 19464",
		"phone": "(855) 205-7350",
		"lat": 40.2501545,
		"lng": -75.66941459999998
	},
	{
		"displayName": "AAMCO of Quakertown",
		"address": "49 SOUTH WEST END BLVD QUAKERTOWN, PA 18951",
		"phone": "(844) 277-9843",
		"lat": 40.4426948,
		"lng": -75.3568123
	},
	{
		"displayName": "AAMCO of Turnersville",
		"address": "4790 BLACKHORSE PIKE (ROUTE 42) TURNERSVILLE, NJ 08012",
		"phone": "(856) 302-0017",
		"lat": 39.7570023,
		"lng": -75.0478147
	},
	{
		"displayName": "AAMCO of Trenton",
		"address": "1701 PRINCETON AVENUE TRENTON, NJ 08648",
		"phone": "(844) 278-0699",
		"lat": 40.2442459,
		"lng": -74.748872
	},
	{
		"displayName": "AAMCO of Vineland",
		"address": "177 S DELSEA DRIVE VINELAND, NJ 08360",
		"phone": "(856) 238-5303",
		"lat": 39.4843465,
		"lng": -75.0432252
	},
	{
		"displayName": "AAMCO of Levittown",
		"address": "5300 EMILIE ROAD, BLDG 7 LEVITTOWN, PA 19057",
		"phone": "(844) 278-0705",
		"lat": 40.1357955,
		"lng": -74.87006910000002
	},
	{
		"displayName": "AAMCO of Reading",
		"address": "1117 LANCASTER AVENUE READING, PA 19607",
		"phone": "(844) 278-0635",
		"lat": 40.31406459999999,
		"lng": -75.9450536
	},
	{
		"displayName": "AAMCO of Pennsauken",
		"address": "5120 RT 38 PENNSAUKEN, NJ 08109",
		"phone": "(856) 317-6178",
		"lat": 39.93489659999999,
		"lng": -75.06749969999998
	}
];

var map;
var markers = [];
var infowindows = [];
var geocoder = new google.maps.Geocoder();
var mapBounds = new google.maps.LatLngBounds();

// Function to construct the map
function initialize() {
	var mapOptions = {
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	// Make the map
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	// Iterate over the location array
	for (var i = 0; i < locations.length; i++) {
		addMarker(locations[i]);
	};
	// Set Map Bounds after map finishes building
	google.maps.event.addListenerOnce(map, 'idle', function() {
		map.fitBounds(mapBounds);
	});
}

// Add a marker to the map and push to the array.
// Add a marker to the map and push to the array.
function addMarker(location) {
	var data,
	infowindow,
	marker,
	pos;

	pos = new google.maps.LatLng(location.lat, location.lng);

	// InfoWindow Content
	data = '<p><strong>'+location.displayName+'</strong><br>'+
		location.phone+'</p>';
	// Create Info Window
	infowindow = new google.maps.InfoWindow({
		content: data,
		maxWidth: 250
	});
	// Create Marker
	marker = new google.maps.Marker({
		position: pos,
		map: map,
		title: location.displayName
	});
	// Make sure map centers on markers
	mapBounds.extend(pos);
	// Add listener to show InfoWinow
	google.maps.event.addListener(marker, 'click', function() {
		closeAllInfoWindows();
		infowindow.open(map, marker);
	});
	// store markers and infowindows in array for later use if wanted
	infowindows.push(infowindow);
	markers.push(marker);

}
// For closing info windows
function closeAllInfoWindows() {
	for (var i=0;i<infowindows.length;i++) {
		infowindows[i].close();
	}
}

google.maps.event.addDomListener(window, 'load', initialize);
