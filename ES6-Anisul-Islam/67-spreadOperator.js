 function addNumbers(x, y, z){
	return x+y+z
 }

 let numbers = [1, 3, 5]
//  let checkFunction = addNumbers(numbers[0], numbers[1], numbers[0])
//  console.log(checkFunction)

console.log(addNumbers(...numbers))  // rest parameter and spread operator are almost same (rest parameter e shodo last variable er jonno use kora jabe)


let number1 = [4, 8]
let number2 = [5, 9]

let numberConcate = number1.concat(number2)
console.log(numberConcate)

// with spread operator 
let numbersConcate = [...number1, ...number2]
console.log(numbersConcate)


// Object Concatenate with spread operator 
let p1 = {
	name: 'rafi',
	age: 20
}

let p2 = {
	nationality: 'bangladeshi',
	occupation: 'student'
}

let p = {...p1, ...p2}
console.log(p)