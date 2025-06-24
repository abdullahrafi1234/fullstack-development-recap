// Web storage API ==> allows us to and read data in browser

// Web API ==> local storage , session storage

// local storage ==> store, read, update and remove data

// no expiry date : data never gets lost even if you close the browser

// localStorage store data as key value pair ==> string

//setItem (key, value)
// localStorage.setItem('userName', 'Rafi')
// localStorage.setItem('password', '258258')
// console.log(localStorage)

// getItem(key)
const userName = localStorage.getItem('userName')
const password = localStorage.getItem('password')
// console.log(userName, password)

// update ==. neew data boshay dilei hbe
localStorage.setItem('userName', 'bhuiyan')
localStorage.setItem('password', '147147')
// console.log(localStorage)

// remove data
localStorage.removeItem('userName')
localStorage.removeItem('password')

// array set on local storage
const countries = ['Aus', 'Ind', 'Ban']
localStorage.setItem('countries', JSON.stringify(countries))

//
const countriesList = JSON.parse(localStorage.getItem('countries'))
// console.log(countriesList)


// localStorage vs sessionStorage 
// 10 mb vs 5mb
// permanent vs session (before tab)

sessionStorage.setItem('user','rafi')
sessionStorage.setItem('user2','bhuiyan')

// const getName = sessionStorage.getItem('user')
// console.log(getName)

sessionStorage.removeItem('user')
sessionStorage.clear()
