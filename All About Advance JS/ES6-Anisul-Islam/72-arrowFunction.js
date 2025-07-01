function normalFunction(num) {
  return num;
}
let normalFunctionCall = normalFunction("Hi i am normal function");
console.log(normalFunctionCall);

// Arrow Function

const arrowFuntion = (num) => {
  return num;
};
console.log(arrowFuntion('Hi i am arrow function'))

// easy way
const display = () => console.log('easy arrow function')
display()


function message1(){
	return 'i am message1'
}
console.log(message1())

//
const message2 = ()=> 'i am message 2'
console.log(message2())