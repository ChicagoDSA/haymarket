window.onload = function() {
	var mouseOver = false;
	var menuIcon = document.getElementById("menu-icon");
	var menuContent = document.getElementById("menu-content");
	var nameLink = document.getElementById("name-link");
	
	if (menuIcon && menuContent) {
		// Show menu when icon is moused over
		menuIcon.onfocus = function () {
			showMenu(menuContent);
		};

		// Hide menu when chapter name is focused
		nameLink.onfocus = function () {
			hideMenu(menuContent);
		};

		// Set mouseover flags
		menuContent.onmouseover = function () {
			mouseOver = true;
		};
		menuContent.onmouseout = function () {
			mouseOver = false;
		};

		// When the mouse moves
		window.onmousemove = function () {
			// If it's outside the visible menu
			if (menuContent.classList.contains("visible-menu") && mouseOver == false) {
				// Hide the menu
				menuContent.classList.remove("visible-menu");
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
