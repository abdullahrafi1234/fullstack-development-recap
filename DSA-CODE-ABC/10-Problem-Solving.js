// Problem Solving Approach In Javascript //

// =====> Maintain 4 concept ====>
/**
 * 1. Understand the problem
 * 2. Break it down
 * 3. Solve and simplify
 * 4. Look back and refactor (readable)
 */

let temperature = [-8, -4, 3, 26, 32, "error", 4, 5];

function getHighestAndLower(arr) {
  // create a higher variable
  let higher = arr[0];
  // create a lower variable
  let lower = arr[0];

  // iterate the whole array
  for (let i = 0; i < arr.length; i++) {
    // let's check is their has any error
    if (typeof arr[i] !== "number") continue;
    console.log(typeof arr[i]);

    // if higher variable has smaller number then our current number than value will be our current element
    if (higher < arr[i]) {
      higher = arr[i];
    }

    // if lower variable has bigger number than our current number then value will be our current element
    if (lower > arr[i]) {
      lower = arr[i];
    }
  }

  //   console.log(lower, higher);

  // return our higher variable and lower variable
  return higher - lower;
}

// getHighestAndLower([2, 3, -5, -9]);
const result = getHighestAndLower(temperature);
console.log(result);
