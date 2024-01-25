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
