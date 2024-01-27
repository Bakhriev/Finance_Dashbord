import Swiper from "swiper"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { removeClassFromElements } from "./functions/removeActiveState"

const navigation = document.querySelector(".menu")
const navigationItems = document.querySelectorAll(".menu__item")

navigation.addEventListener("click", e => {
	const clickedMenuItem = e.target.closest(".menu__item")
	if (clickedMenuItem) {
		if (clickedMenuItem.classList.contains("menu__item_active")) {
			return
		} else {
			removeClassFromElements(navigationItems, "menu__item_active")
			clickedMenuItem.classList.add("menu__item_active")
		}
	}
})

const goalsSwiper = new Swiper(".goals__swiper", {
	slidesPerView: 3,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	modules: [Navigation],
})

const cardsSwiper = new Swiper(".user-cards__swiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	modules: [Navigation],
})

const progressBars = document.querySelectorAll(".progressbar")
progressBars.forEach(progressbar => {
	progressbar.querySelector(".progressbar__value").style.width =
		progressbar.dataset.value + "%"
})
