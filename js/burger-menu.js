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
		if (menuBody.closest("._active")) {
			const menuLinks = menuBody.querySelectorAll('.header__navigation a');
			menuLinks.forEach(link => {
				link.addEventListener('click', () => {
					setTimeout(menu_close, 600);
					body_lock(600);
				});
			});
		}
	});
};

// burgerMenu end

function menu_close() {
	let menuBody = document.getElementById("header-body");
	burgerMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
// burgerMenu end