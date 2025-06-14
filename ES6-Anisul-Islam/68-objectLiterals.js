// Object Literals (concise kore ba soto kore)

function studentInfo1 (name, age){
	return{
		// name: name,
		// age: age
		
		name,  //duplication er drkr nai
		age
	}
}
console.log(studentInfo1('rafi', 20))

// Function inside the object
let message = {
	body: function(){
		return 'I am Function inside Object'
	}
}
console.log(message.body())

// in ES6 
let message2 = {
	body(){
		return 'I am function inside object and i am a concise method on using es6'
	}
}
console.log(message2.body())

// If i want to use a function name with space
let message3 = {
	'body name'(){
		return 'i am function inside object, and i am a concise method on using es8. also i am carry a name with space'
	}
}

console.log(message3["body name"]())