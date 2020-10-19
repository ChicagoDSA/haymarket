window.onload = function() {
	var mouseOver = false;
	var mobileMenuIcon = document.getElementById("mobile-menu-icon");
	var mobileMenuContent = document.getElementById("mobile-menu-content");
	var nameLink = document.getElementById("name-link");
	
	if (mobileMenuIcon && mobileMenuContent) {
		// Show menu when icon is moused over
		mobileMenuIcon.onfocus = function () {
			showMenu(mobileMenuContent);
		};

		// Hide menu when chapter name is focused
		nameLink.onfocus = function () {
			hideMenu(mobileMenuContent);
		};

		// Set mouseover flags
		mobileMenuContent.onmouseover = function () {
			mouseOver = true;
		};
		mobileMenuContent.onmouseout = function () {
			mouseOver = false;
		};

		// When the mouse moves
		window.onmousemove = function () {
			// If it's outside the visible menu
			if (mobileMenuContent.classList.contains("visible-menu") && mouseOver == false) {
				// Hide the menu
				mobileMenuContent.classList.remove("visible-menu");
			};
		};
	};	
};

function showMenu(menu) {
	menu.classList.add("visible-menu");
};

function hideMenu(menu) {
	menu.classList.remove("visible-menu");
};
