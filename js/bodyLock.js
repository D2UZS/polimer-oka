// !._lp- это класс, который нужно добавлять к фиксированным элементам, что бы они не дергались при открытии зафиксированных элементов (popup, мобильное меню и т.д.)

// ! Переменная замок, предотвращает двойные нажатия на интерактивные кнопки (открытие popup например)
let unlock = true;

// ! BodyLock Запрещает скролл body, предотвращает дергание контента из-за полосы прокрутки
function body_lock(delay) {
	const body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	const body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '';
			}
			body.style.paddingRight = '';
			document.body.classList.remove('_lock');
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.body.classList.add('_lock');

		let pagePosition = window.scrollY;
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
// BodyLock end

