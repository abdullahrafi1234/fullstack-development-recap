// fetch() has replaced XMLHttpRequest
// fetch() == global method for making HTTP Request
// 2 ways to call ==> then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser
// we use json placeholder guide documentation

console.clear();
// console.log(window)
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
// 	method: 'DELETE',
// 	headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// .then((res)=>{
// 	if(!res.ok){
// 		const message = `Error : ${res.status}`
// 		throw new Error(message)
// 	}
// 	return res.json()
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// ASYNC AWAIT

const makeRequest = async (url, config) => {
  const res = await fetch(url, config);  // config ta lagbe post , put, patch er jonno
  if (!res.ok) {
    const message = res.status;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const getData = () => {
	makeRequest('https://jsonplaceholder.typicode.com/posts')
	.then((res) => console.log(res))
	.catch((err)=> console.log(err))
}


const postData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


const putData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
	id: 1,
    title: "fooqqq",
    body: "bar",
    userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


const patchData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
    body: "barBQ",

    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// getData()
// postData();
// putData()
// patchData()
deleteData()