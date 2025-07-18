// Important Object Methods

var myObj = {
	name: 'JavaScript',
	founder: 'Brendan Eich',
	estd: 1995,
	ranking: 1
}

let keys = Object.keys(myObj)
let values = Object.values(myObj)
let entries = Object.entries(myObj)  // both key and values

console.log(keys)
console.log(values)
console.log(entries)