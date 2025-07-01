// 4 ways to call api ==> 

// axios is a js library
// it helps to make request from browser (plain js/vue/react/angular), node.js ===> 


// console.log(window)

// axios.get('https://jsonplaceholder.typicode.com/posts')

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//   	body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
// })


// axios.put('https://jsonplaceholder.typicode.com/posts/1', {
// 	id: 1,
//   	body: JSON.stringify({
//     title: 'foomaa',
//     body: 'barmaaa',
//     userId: 1,
//   }),
// })

// axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
//   	body: JSON.stringify({
//     body: 'barmaaa yeeee',
 
//   }),
// })

// axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
// })

// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))




const makeRequest = async(config) => {

	return await axios(config)
}

const getData = () => {
	makeRequest('https://jsonplaceholder.typicode.com/posts')
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
}
const postData = () => {
	makeRequest({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'post',
		data:JSON.stringify({
			title: 'foo',
   			body: 'bar',
  			userId: 1,
			})
		})
}

const updateData = () => {
	makeRequest({
		url: 'https://jsonplaceholder.typicode.com/posts/1',
		method: 'put',
		data:JSON.stringify({
			id: 1,
			title: 'foo faaaaa',
   			body: 'bar',
  			userId: 1,
			})
		})


	.then((res) => console.log(res.data))
	.catch((err) => console.log(err))
}
const deleteData = () => {
	makeRequest({
		url: 'https://jsonplaceholder.typicode.com/posts/1',
		method: 'delete'
		})


	.then((res) => console.log(res.data))
	.catch((err) => console.log(err))
}
// getData()
// postData()
// updateData()
deleteData()