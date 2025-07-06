// Array.prototype.reduce()

// reduce previous value mone rakhe, mane ager iteration er result ta k previous value hishebe use hoy...tai 1st element er jonno initial value diye dite hoy. and main array change korena ==>

const numbers = [1, 2, 3, 4, 5, 6, 7]

// const result = numbers.reduce((preValue, currentValue) => {

// }, initial value)

const result = numbers.reduce((preValue, currentValue) => {
	return preValue + currentValue

}, 0)

console.log(result)