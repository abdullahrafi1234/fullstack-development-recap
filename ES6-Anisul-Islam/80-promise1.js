console.log("welcome");

//Create promise ==> pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
  let completedPromise = false;
  if (completedPromise) {
    resolve("Completed promise 1");
  } else {
    reject("Incomplete promise 2");
  }
});

// console.log(promise1)
// resolve er jonno then use hoy and reject er jonno catch use hoy ==> 
	
promise1.then((res)=> {
	console.log(res)
})
.catch(err => {
	console.log(err)
})

console.log("end");
