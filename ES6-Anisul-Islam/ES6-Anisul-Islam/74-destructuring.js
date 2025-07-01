// Destructuring array and objects

// array destructure
let numbers = [20, 30, 40, 44];
let [num1, num2, num3, num4] = numbers;

// console.log(num1);
// console.log(num2);

// swap variables (just value change)
let a = 10,  b = 20;
[a,b] = [b, a]

// console.log(a, b)

//Object Destructure
const studentInfo = {
	name: 'rafi',
	id: 1025,
	gpa: 2.50
}
const {name, id, gpa} = studentInfo

// console.log(id)
//Nested Object Destructure
const studentInfoNested = {
	fullname: 'rafi-bhuiyan',
	ids: 2025,
	cgpa: 3.50,
	language : {
		native: 'bangla',
		comfortable : 'english'
	}
}
const {fullname,  ids, language} = studentInfoNested

console.log(id, language.native)

// Destructuring function parameters ( parameter er jaygay {} diye destructure kora jay)
const studentInfos = ({id, fullname}) => {
	console.log(id, fullname)
}

const student = {
	id: 101,
	fullname: 'Rafi Bhuiyan'
}

studentInfos(student)