// Returns yyyy-mm-dd format for URL
function formatDate(date) {
	var dd = date.getDate();
	var mm = date.getMonth()+1; 
	var yyyy = date.getFullYear();

	if (dd < 10) {
		dd="0"+dd;
	};

	if (mm < 10) {
		mm="0"+mm;
	}; 

	date = yyyy+"-"+mm+"-"+dd;
	return date;
}

// Sets end date for query
function getFutureDate(date, months) {
	return new Date(date.setMonth(date.getMonth() + months));      
}

// Set up calendar
var today = new Date();
var calendar = document.currentScript.getAttribute("calendar");
var url = "https://api.teamup.com/"+calendar+"/events?startDate="+formatDate(today)+"&endDate="+formatDate(getFutureDate(today, 6));

// Get list element
var eventList = document.getElementById("event-list");

window.onload = function(){
	// CORS logic taken from Teamup API docs
	// https://apidocs.teamup.com/#querying-the-api-via-javascript-cors

	// Creates a CORS request w/cross-browser support
	function createCORSRequest(method, url) {
		var apiKey = "cb7ef970fd2b7b1a85acd5a8a2ef6d7f77477648b0963c29c629391742f24c5a";
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr) {
			// XHR for Chrome/Firefox/Opera/Safari/IE10+
			xhr.open(method, url, true);
			xhr.setRequestHeader("Teamup-Token", apiKey);
		} else if (typeof XDomainRequest != "undefined") {
			// XDomainRequest for IE8/IE9.
			xhr = new XDomainRequest();
			// XDomainRequest does not support querying HTTPS from HTTP pages
			if (window.location.protocol === "http:") {
				url = url.replace("https://", "http://");
			}
			if (-1 === ["GET", "POST"].indexOf(method)) {
				console.log("XDomainRequest only supports GET and POST methods");
				return;
			}
			if (-1 === url.indexOf("?")) {
				url += "?_teamup_token=" + apiKey;
			} else {
				url += "&_teamup_token=" + apiKey;
			}
			xhr.open(method, url);
		} else {
			// CORS not supported
			xhr = null;
		}
		return xhr;
	}

	// Send the request
	function makeCorsRequest(url, successCallback, errorCallback) {
		var xhr = createCORSRequest("GET", url);
		if (!xhr) {
			console.log("CORS not supported");
			return;
		}

		// Response handlers
		xhr.onload = function (xhr) {
			if (xhr.target.status < 400) {
				if (successCallback) successCallback(xhr.target);
			} else if (errorCallback) {
				errorCallback(xhr.target);
			}
		};
		xhr.onerror = function (xhr) {
			if (errorCallback) {
				errorCallback(xhr.target);
			}
		};

		xhr.send();
	}

	// Send a GET request for all events in a date range
	makeCorsRequest(
		url,
		function(xhr) {
			var data = JSON.parse(xhr.responseText);
			console.log("Successfully received events");

			// Create clear floats
			var clear = document.createElement("div");
			clear.style.clear = "both";

			for (var i = 0; i < data.events.length; i++) {
				var obj = data.events[i];

				// Create HTML elements
				var event = document.createElement("li");
				var columnFix = document.createElement("div");
				var eventLink = document.createElement("a");
				var noImage = document.createElement("div");
				var title = document.createElement("div");
				var titleText = document.createElement("h4");				

				// Set classes
				event.className = "tile-container";
				columnFix.className = "column-fix";
				noImage.className = "no-image";
				title.className = "title";

				// Link to event
				eventLink.href = "https://teamup.com/"+calendar+"/events/"+obj.id;

				// Set title
				titleText.innerText = obj.title;

				// Add event to list
				eventList.appendChild(event);

				// Add elements to event
				event.appendChild(columnFix);
				columnFix.appendChild(eventLink);
				eventLink.appendChild(noImage);
				eventLink.appendChild(title);
				title.appendChild(titleText);

				// Clear floats
				titleText.appendChild(clear);
			};

			// Clear floats
			eventList.appendChild(clear);
		},
		function(xhr) {
			var data = JSON.parse(xhr.responseText);
			console.log("Request failed with code "+xhr.status+": "+JSON.stringify(data));
		}
	);
};
