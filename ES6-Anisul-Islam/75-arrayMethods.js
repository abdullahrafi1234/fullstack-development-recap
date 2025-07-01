// find (callback, value) return the value of the first element that pass certain condition

const numbers = [15, 33, 40, 20, 80];

const evenNumber = (value, index, array) => {
  if (value % 2 == 0) 
	return value;
};

const firstEvenWithNormalFunction = numbers.find(evenNumber);
console.log(firstEvenWithNormalFunction);

evenNumber(numbers);
const firstEven = numbers.find((x) => x % 2 == 0);
console.log(firstEven);

const students = [
  {
    id: 203,
    gpa: 2.65,
  },
  {
    id: 233,
    gpa: 2.9,
  },
  {
    id: 403,
    gpa: 3.5,
  },
  {
    id: 20003,
    gpa: 4.65,
  },
];

const goodStudent = students.find((x) => x.gpa > 3);
console.log(goodStudent);

// findIndex (callback, value) return the index of the first element that pass certain condition

const firstEvenIndex = numbers.findIndex((x) => x % 2 == 0);
console.log(firstEvenIndex);

const goodStudentIndex = students.findIndex((x) => x.gpa > 3);
console.log(goodStudentIndex);
