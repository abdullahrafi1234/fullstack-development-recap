// map and filter function


// map same as forEach, diff hoilo forEach er jonno array niye push korte hoy r map nijei array return kore
let numbers = [10, 30, 33, 20, 40]
let squareNum = numbers.map(function(x){
	return x*x
})
console.log(squareNum)


// filter
let filterNum = numbers.filter(function(x){
	return x>10
})
console.log(filterNum)