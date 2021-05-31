"use strict";

// ! header
const header = document.querySelector('.header');

// ! Фиксирует header 
const fixHeader = (scrollHeight) => {
	window.onscroll = () => {
		if (window.pageYOffset > scrollHeight) {
			header.classList.add('header--white');
		} else {
			header.classList.remove('header--white');
		}
	}
}

if (header) {
	fixHeader(350);
}

//  header end

// ! advantages
const advantages = document.querySelectorAll('.advantage');

if (advantages.length > 0 && !isMobile.any()) {
	advantages.forEach(item => {
		item.addEventListener('mouseenter', () => {
			advantages.forEach(el => el.classList.remove('active'));
			item.classList.add('active');
		});
	});
}
// advantages end
