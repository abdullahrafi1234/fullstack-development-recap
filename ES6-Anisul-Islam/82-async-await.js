console.log('welcome')

const taskOne = () =>  {
	return new Promise((resolve, reject)=> {
		resolve('task 1 is completed')
	})
}
const taskTwo = () =>  {
	return new Promise((resolve, reject)=> {
		// resolve('task 2 is complet/ed')
		setTimeout(()=> {
			resolve('task 2 is completed')
		},2000)
	})
}
const taskThree = () =>  {
	return new Promise((resolve, reject)=> {
		// resolve('task 3 is completed')
		reject('task 3 is not completed')
	})
}
const taskFour = () =>  {
	return new Promise((resolve, reject)=> {
		resolve('task 4 is completed')
	})
}

// taskOne().then((res)=> console.log(res))

// Normal async function ===> 
// async function callAllTask (){
// 	const task1= await taskOne()
// 	console.log(task1)
// 	const task2 = await taskTwo()
// 	console.log(task2)
// 	const task3 = await taskThree()
// 	console.log(task3)
// 	const task4 = await taskFour()
// 	console.log(task4)
// }

// async arrow function ===> 
const callAllTask2 = async ()=> {
	try{
		const task1= await taskOne()
		console.log(task1)
		const task2 = await taskTwo()
		console.log(task2)
		const task3 = await taskThree()
		console.log(task3)
		const task4 = await taskFour()
		console.log(task4)
	}
	catch(error){
		console.log(error)
	}
}

// callAllTask()
callAllTask2()

console.log('bye')