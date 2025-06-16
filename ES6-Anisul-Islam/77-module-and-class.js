export let text = 'Welcome to the module'

export function setText(txt){
	text = txt
}


// class in es6

class Student {
	
	constructor(id, name){
		this.id = id;
		this.name = name;
	}

}

let s1 = new Student(101, 'Rafi')
console.log(s1)
console.log(s1.id)
console.log(s1.name)