// for loop, for in, for of


// for loop ===> 

for (let i=0; i<=5; i++){
	// console.log(i)
}

let i = 1
 
for(; ; i++){
	if(i<=5){
		// console.log(i)
	}
	else{
		break;
	}
}


// for in ===> (obj er jonno)

const myObj = {
	name: 'Js',
	estd: '1995',
	founder: 'Brendan Eich'
}

for (property in myObj){
	// console.log(property)
}


// for of ===> 
const myArray = [1, 2, 3, 4, 5]

for (element of myArray){
	console.log(element)
}

// jokhon array te for in use kora hoy tokhn {index} paoa jay
for (element in myArray){
	console.log(element)
}

