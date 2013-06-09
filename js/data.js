window.Data = {

	get: function ( url, callback ) {
		return $.ajax({
	        url: url,
	        dataType: 'jsonp',
	        jsonpCallback: callback
	    });
	}
};