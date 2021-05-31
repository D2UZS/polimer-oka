// ! burgerMenu
const burgerMenu = document.getElementById("burger-menu");

if (burgerMenu != null) {
	const delay = 500;
	const menuBody = document.getElementById("header-body");
	burgerMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			burgerMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};

// burgerMenu end