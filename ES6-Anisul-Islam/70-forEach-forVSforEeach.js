// forEach || for vs forEach

let numbers = [1, 3, 4, 9];
for (let x = 0; x < numbers.length; x++) {
  // console.log(numbers[x]);
}

// forEach ==> (eita ekta function receive kore)

let studentNumber1 = [10, 30, 40, 50];
studentNumber1.forEach(myFunction); // value ta niye function er x er modde rakhbe

function myFunction(x) {
  // console.log(x);
}

// direct function use kora jabe
let studentNumber2 = [10, 30, 40, 50];
studentNumber2.forEach(function myFunction(
  y // value ta niye y er modde rakhbe
) {
  // console.log(y);
});

// ei khete name na dileo hbe eitake Anonymus Function bole

let studentNumber3 = [10, 30, 40, 50];
let squareValue = [];
studentNumber3.forEach(function (x)  // value ta niye x er modde rakhbe
{
  let cross = x*x
  squareValue.push(cross)
});
 console.log(squareValue)


 let anotherNumbers = [10, 30, 20, 70]
 anotherNumbers.forEach(function(y, index, arr){
  arr[index] = y + 5
 })

 console.log(anotherNumbers)