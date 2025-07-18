// Function default parameter value

function myFunc (x=10){
	return x
	
}
let funct1 = myFunc(45)  // value dile oitai dekhabe
let funct2 = myFunc()  //value na dile default ta dekhabe
let funct3 = myFunc(null) // null dile null dekhabe karon eitao ekta value

console.log(funct1)
console.log(funct2)
console.log(funct3)

