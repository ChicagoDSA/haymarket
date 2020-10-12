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
};

// Sets end date for query
function getFutureDate(date, months) {
	return new Date(date.setMonth(date.getMonth() + months));      
};

function loadCalendar(calendar, key, limit, lang) {
	// Get parent element of current script
	var scripts = document.getElementsByTagName("script");
	currentScript = scripts[scripts.length - 1];
	var parentElement = currentScript.parentNode;

	// Set up calendar
	var today = new Date();
	var url = "https://api.teamup.com/"+calendar+"/events?startDate="+formatDate(today)+"&endDate="+formatDate(getFutureDate(today, 6));

	// CORS logic taken from Teamup API docs
	// https://apidocs.teamup.com/#querying-the-api-via-javascript-cors

	// Creates a CORS request w/cross-browser support
	function createCORSRequest(method, url) {
		var apiKey = key;
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
			};
			if (-1 === ["GET", "POST"].indexOf(method)) {
				console.log("XDomainRequest only supports GET and POST methods");
				return;
			};
			if (-1 === url.indexOf("?")) {
				url += "?_teamup_token=" + apiKey;
			} else {
				url += "&_teamup_token=" + apiKey;
			};
			xhr.open(method, url);
		} else {
			// CORS not supported
			xhr = null;
		};
		return xhr;
	}

	// Send the request
	function makeCorsRequest(url, successCallback, errorCallback) {
		var xhr = createCORSRequest("GET", url);
		if (!xhr) {
			console.log("CORS not supported");
			return;
		};

		// Response handlers
		xhr.onload = function (xhr) {
			if (xhr.target.status < 400) {
				if (successCallback) successCallback(xhr.target);
			} else if (errorCallback) {
				errorCallback(xhr.target);
			};
		};
		xhr.onerror = function (xhr) {
			if (errorCallback) {
				errorCallback(xhr.target);
			};
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
			var clearFloats = document.createElement("div");
			clearFloats.style.clear = "both";

			// If limit is defined, shorten results
			if (limit) {
				var showLength = limit;
			} else {
				showLength = data.events.length;
			};

			for (var i = 0; i < showLength && i < data.events.length; i++) {
				var obj = data.events[i];

				// Create HTML elements
				var event = document.createElement("li");
				var columnFix = document.createElement("div");
				var eventLink = document.createElement("a");
				var title = document.createElement("div");
				var icon = document.createElement("i");	
				var titleText = document.createElement("h4");
				var timeText = document.createElement("h5");			

				// Set classes
				event.className = "event-container";
				columnFix.className = "column-fix";
				icon.className = "far fa-calendar-alt";
				title.className = "title";
				timeText.className = "timestamp";

				// Link to event
				eventLink.href = "https://teamup.com/"+calendar+"/events/"+obj.id+"?view=a";

				var locale = lang;
				var dateOptions = { weekday: "long", month: "short", day: "numeric"};
				var timeOptions = { hour: "numeric", minute: "2-digit"};
				var startDate = new Date(obj.start_dt);

				// Set content
				titleText.innerHTML = obj.title;
				timeText.innerText = startDate.toLocaleDateString(locale, dateOptions)+" - "+startDate.toLocaleTimeString(locale, timeOptions);

				// Add event to list
				parentElement.appendChild(event);

				// Add elements to event
				event.appendChild(columnFix);
				columnFix.appendChild(eventLink);
				eventLink.appendChild(title);
				title.appendChild(icon);	
				title.appendChild(titleText);
				title.appendChild(timeText);
			};
			// Clear floats
			parentElement.appendChild(clearFloats);
		},
		function(xhr) {
			var data = JSON.parse(xhr.responseText);
			console.log("Request failed with code "+xhr.status+": "+JSON.stringify(data));

			var noEvents = document.createElement("p");
			noEvents.innerText = "No events found."
			parentElement.appendChild(noEvents);
		}
	);
};
