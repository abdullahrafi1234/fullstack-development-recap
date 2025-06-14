"use strict"

// Default Parameter
function message(text='value deynai tai eita default parameter'){
	console.log(text)
}
// message('');
message('text diyechi');

function sum (x, y){
	let add = x + y
	console.log(add)
}
sum(20, 30)


// Rest Parameter

function restParameter (x, y, ...z){
	console.log(`x = ${x}, y = ${y}, z= ${z}`)
}

restParameter(10, 20, 30 , 40, 50, 60, 70)
