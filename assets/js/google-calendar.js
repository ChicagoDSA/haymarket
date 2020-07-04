// Calendar setup
var key = "AIzaSyC5wN79rwDw1VJrAjaQFrLxVQNp8jNeVXg";
var calendar = document.currentScript.getAttribute("calendar");
var url = "https://www.googleapis.com/calendar/v3/calendars/"+calendar+"/events?key="+key;

// Get list element
var eventList = document.getElementById("event-list");

window.onload = function(){
	// Load GeoJSON
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onload = function() {
		if (this.status >= 200 && this.status < 400) {
			json = JSON.parse(this.response);

			for (var i = 0; i < json.items.length; i++) {
			    var obj = json.items[i];

			    if (obj.kind == "calendar#event") {
			    	var title = document.createElement("p");
			    	var titleLink = document.createElement("a");

			    	// Set link attributes
			    	titleLink.href = obj.htmlLink;
				    titleLink.innerHTML = obj.summary;

				    // Add link to paragraph
				    title.appendChild(titleLink);

				    // Add paragraph to list
				    eventList.appendChild(title);
			    };
			};
		};
	};
	request.send();
};
