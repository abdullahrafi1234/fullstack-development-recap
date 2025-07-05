// Array.prototype.find()

let numbers = [1, 4, 5, 8, 4]
let check = numbers.find(function(currentValue){
	return currentValue> 4
})

console.log(check)