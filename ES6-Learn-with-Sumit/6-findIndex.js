// Array.prototype.findIndex()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let result = numbers.findIndex((currentValue, index, arr) => {
	return !(currentValue % 2)
})

console.log(result)