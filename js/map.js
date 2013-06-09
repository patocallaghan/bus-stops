window.UI = {

	map: null,

	init: function () {

		var mapOptions = {
			center: new google.maps.LatLng( -36.899376, 174.8135 ),
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		UI.map = new google.maps.Map( document.getElementById( "map-canvas" ), mapOptions );
	},

	_drawCoord: function ( lat, long ) {
		return {
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			map: UI.map,
			center: new google.maps.LatLng( lat, long ),
			radius: 40
		};

	},

	addPointToMap: function ( lat, long ) {
		var circle = UI._drawCoord( lat, long );
		var cityCircle = new google.maps.Circle( circle );
	},

	drawData: function ( data ) {
		var stops = data.stops;
		for ( var i = 0, length = stops.length; i < length; i++ ) {
			var stop = stops[i];
			UI.addPointToMap( stop.lat, stop.long );
		}
	}
}; 