// Example 1: Copying an array using spread operator
const numbers = [1, 2, 3];
const numbersCopy = [...numbers];
// console.log(numbersCopy); // [1, 2, 3]

// Example 2: Merging arrays
const arr1 = [4, 5];
const merged = [...numbers, ...arr1];
// console.log(merged); // [1, 2, 3, 4, 5]

// Example 3: Copying and updating objects
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };
// console.log(updatedUser); // { name: "Alice", age: 26 }

// Example 4: Spreading in function arguments
function sum(a, b, c) {
	return a + b + c;
}
const values = [10, 20, 30];
// console.log(sum(...values)); // 60




 