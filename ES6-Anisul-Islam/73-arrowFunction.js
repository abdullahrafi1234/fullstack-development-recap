// Arrow function on object using map and filter

let students = [{
	name: 'rafi',
	id: 102,
	cgpa: 2.50
},
{
	name: 'al',
	id: 103,
	cgpa: 2.65
},
{
	name: 'bhuiyan',
	id: 104,
	cgpa: 3.50
}
]

function studentName(){
	return students.filter(function(x){
		return x.cgpa > 2.5

	}).map(function(y){
		return y.name
	})
}
// console.log(studentName())


const studentName2 = () => {  //{} use korle return korte hobe
	return students.filter((x)=>x.cgpa > 2.50).map((y)=> y.name)
}
console.log(studentName2())
