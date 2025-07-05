// Array.prototype.concat()

let numbers1 = [1, 2, 3]
let numbers2 = [4, 5, 6]
let numbers3 = [40, 50, 60]

const result = numbers1.concat(numbers2)
const resultMoreConcat = numbers1.concat(numbers2, numbers3)
console.log(result)
console.log(numbers2)
console.log(resultMoreConcat)