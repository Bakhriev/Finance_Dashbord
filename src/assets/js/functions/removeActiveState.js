export const removeClassFromElements = (elements, className) => {
	elements.forEach(element => {
		element.classList.remove(className)
	})
}
