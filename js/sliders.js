//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let sliderSlider = new Swiper('.catalog__list', {
	// slidesPerView: "auto",
	slidesPerView: 5,
	spaceBetween: 8,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	on: {
		init() {
			this.el.addEventListener('mouseenter', () => {
				this.autoplay.stop();
			});

			this.el.addEventListener('mouseleave', () => {
				this.autoplay.start();
			});
		}
	},
	speed: 800,
	breakpoints: {
		768: {
			spaceBetween: 16,
		},
		992: {
			spaceBetween: 24,
		},
	},
});

const sliderBtns = document.querySelectorAll('.slider-arrows__arrow');

if (sliderBtns.length > 0 && !isMobile.any()) {
	sliderBtns.forEach(item => {
		item.addEventListener('mouseenter', () => {
			sliderBtns.forEach(el => el.classList.remove('_active'));
			item.classList.add('_active');
		});
	});
}