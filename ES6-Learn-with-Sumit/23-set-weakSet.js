// set and weak set 

// Sets
/** Create set ==> let mySet = new Set();
 * 1. add()
 * 2. delete()
 * 3. has()
 * 4. clear() 
 * 5. size()
 */

// let myArray = new Array();
let mySet = new Set();

mySet.add(5)
mySet.add('Bangladesh')
// mySet.add('Bangladesh') // 2 bar dile 1 bar hoy

mySet.delete('Bangladesh')

// chain kora jay
mySet.add(10).add('BD').add('Nepal').delete(5)
// mySet.add(10).add('BD').add('Nepal').clear()   // set full clear hoye jabe

// console.log(mySet.has('Bangladesh'))

console.log(mySet)
console.log(mySet.size)