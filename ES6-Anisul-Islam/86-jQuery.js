// add jquery library cdn
// ajax => asynchronous js and xml

console.log(window)

const makeRequest =async (url, method, data) => {

	try{
		const result =await $.ajax({
		url: url,
		method: method,
		data: data
	})
	// console.log(result)
	return result;

	}catch(err){
		console.log(err)
	}
}

// const getData = () => {
// 	makeRequest('https://jsonplaceholder.typicode.com/posts', "GET")
// 	.then((res)=> console.log(res))
// 	// .catch((err) => console.log(err))
// }

// const createData = () => {
// 	makeRequest('https://jsonplaceholder.typicode.com/posts', "POST", {
// 		title: 'foooo',
// 		body: 'bar',
// 		userId: 1
// 	})
// 	.then((res)=> console.log(res))
// 	// .catch((err) => console.log(err))
// }
const updateData = () => {
	makeRequest('https://jsonplaceholder.typicode.com/posts/1', "PUT", {
		title: 'fooooww',
		body: 'barww',
		userId: 1,
		id: 1
	})
	.then((res)=> console.log(res))
	// .catch((err) => console.log(err))
}

const deleteData = () => {
	makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
	.then((res)=> console.log(res))
}

// getData()
// createData()
// updateData()
deleteData()