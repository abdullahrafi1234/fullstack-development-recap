// For ... of and for ... in loop ===>

	// for of use on array
	const names = ['s1', 's2', 's3']
	for (let name of names){
		console.log(name)
	}

	// for in us on object
	const students = {
		name: 'rafi',
		age: 20,
		id: 20122032
	}
	for (let student in students){
		// console.log(student)  //only key paoa jbe
		// console.log(students[student])  //value paoa jabe
		console.log(`${student} : ${students[student]}`)
	}