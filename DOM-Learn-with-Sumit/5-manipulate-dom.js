// creating an element

const divElement = document.createElement('div')

divElement.className = 'red'

divElement.setAttribute('id', 'red')
divElement.setAttribute('title', 'Red Div')
// console.log(divElement)

const container = document.querySelector('.todo-list')
// const h2Element = container.querySelector
// ('h2')
// container.insertBefore(divElement, h2Element)

const a = container.appendChild(divElement)   // append child er modde html element dite hoy
const b = container.append(divElement, 'Hello World')   /// append er modde normal string deoa jay and chaile 2, 3 ta element ekshate deoa jay

console.log(a, b)