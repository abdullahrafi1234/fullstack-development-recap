// Destructuring ====>

	const user = {
		id: 330,
		name: 'rafi',
		age: 40,
		education : {
			degree: 'masters'
		},
	}

	const {name, id} = user;
	const {education:{degree}} = user


	console.log(name, id)
	console.log(degree)

	// array destructuring

	const numbers = [1, 2, 3, 4, 5]

	const [a, b] = numbers
	const [, x, , , y] = numbers

	console.log(a, b)
	console.log(x,y)