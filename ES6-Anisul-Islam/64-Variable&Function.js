let x = 11

for (let x= 2; x<=10 ;x+= 3){
	console.log(x)
}

console.log('Bahirer X =',x)

const noChange = 125;

// string concatenate ==>

let a = 25;
let b = 35;

let sum = a+b
console.log(`sum is ${sum}. the end`)

let name = 'Abdullah Al Rafi'
let message = `I am ${name}. I am learning JS`
console.log(message)

// Function ==> 
	function add (a, b) {
		let sum = a+b
			return sum
		// console.log(sum)
	}
	const added = add(25, 35)
	// console.log(added)

	// Function in ES6

	const add2 = (a,b) => {
		let sum = a+b
		console.log(sum)
	}

	add2(10,20)