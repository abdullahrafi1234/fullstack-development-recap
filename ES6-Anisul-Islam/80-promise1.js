console.log("welcome");

//Create promise ==> pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
  let completedPromise = true;
  if (completedPromise) {
    // resolve("Completed promise 1");
   
	setTimeout(() => {
		 resolve("Completed promise 1");
	},2000)

  } else {
    // reject("Incomplete promise 2");
    reject(new Error('Incomplete promise 1'));
  }
});

const promise2 = new Promise ((resolve, reject)=> {
	// resolve('completed promise 2')
	setTimeout(() => {
			resolve('completed promise 2')
	}, 1000)
})

// console.log(promise1)
// resolve er jonno then use hoy and reject er jonno catch use hoy ==> 

promise1.then((res)=> {
	// console.log(res)
})
.catch(err => {
	// console.log(err)
	// console.log(err.message)
})

promise2.then((res) => {
	// console.log(res)
})

// run all promise together
Promise.all([promise1, promise2])
.then(([res1, res2])=> {
	// console.log(res1, res2)
})

// promise race ( jeita age kaj korbe shodo oita return korbe)

Promise.race([promise1, promise2])
.then((res)=> {
	console.log(res)
})

console.log("end");
