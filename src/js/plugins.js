// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// All the google map functions
(function() {
  var queryLimit = 10,
    queryCount = 0,
    map,
    markers = [],
    infowindows = [],
    locationData,
    geocoder = new google.maps.Geocoder(),
    mapBounds = new google.maps.LatLngBounds();

  // Function to construct the map
  initializeMap = function(data) {
    locationData = data;
    var mapOptions = {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      scrollwheel: false
    };
    // Make the map
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // Iterate over the location array
    for (var i = 0; i < queryLimit; i++) {
      addMarker(locationData[i]);
    }
    // Set Map Bounds after map finishes building
    google.maps.event.addListenerOnce(map, 'idle', function() {
      map.fitBounds(mapBounds);
    });
  };

  setTimeout(function() {
    // Doing this because even on a paid account the queries are throttled after 10
    mQueue = setInterval(markerQueue, 1000);
  }, 1500);

  var markerQueue = function() {
    addMarker(locationData[queryCount]);
  };

  // Add a marker to the map and push to the array.
  var addMarker = function(location) {
    var windowContent,
    infowindow,
    marker,
    pos,
    address = location.Address + ', ' + location.Address02 + ', ' + location.City01 + ', ' + location.State01 + ' ' + location.Zip01;

    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        pos = results[0].geometry.location;
        // InfoWindow Content
        windowContent = '<p><strong>'+location.displayName+'</strong><br>'+
          location.phone+'</p>';
        // Create Info Window
        infowindow = new google.maps.InfoWindow({
          content: windowContent,
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
        map.fitBounds(mapBounds);
        // Add listener to show InfoWinow
        google.maps.event.addListener(marker, 'click', function() {
          closeAllInfoWindows();
          infowindow.open(map, marker);
        });
        // store markers and infowindows in array for later use if wanted
        infowindows.push(infowindow);
        markers.push(marker);
        queryCount++;

        if (typeof mQueue !== 'undefined') {
          if (queryCount === locationData.length) {
            window.clearInterval(mQueue);
            map.panToBounds(mapBounds);
            console.log('Finished Loading Markers');
          }
        }

      } else {
        if (status === 'ZERO_RESULTS') {
          queryCount++;
        }
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  };
  // For closing info windows
  var closeAllInfoWindows = function() {
    for (var i=0;i<infowindows.length;i++) {
      infowindows[i].close();
    }
  };
}());

// Equal Height Divs
(function() {
  equalHeightDivs = function(selector) {
    var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = [],
      $el,
      topPosition = 0;

    $(selector).each(function() {

      $el = $(this);
      topPosition = $el.position().top;

      if (currentRowStart != topPosition) {

        // we just came to a new row.  Set all the heights on the completed row
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
        }

        // set the variables for the new row
        rowDivs.length = 0; // empty the array
        currentRowStart = topPosition;
        currentTallest = $el.height();
        rowDivs.push($el);

      } else {

        // another div on the current row.  Add it to the list and check if it's taller
        rowDivs.push($el);
        currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

      }

      // do the last row
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }

    });
  };
}());
// Place any jQuery/helper plugins in here.
