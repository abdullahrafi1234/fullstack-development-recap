// Array.prototype.findIndex()
// particular element paile kaj off kore dey

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let result = numbers.findIndex((currentValue, index, arr) => {
	return (currentValue > 20)
	// jokhn array te kisu na pay taile (-1) return korbe
}, this)

console.log(result)