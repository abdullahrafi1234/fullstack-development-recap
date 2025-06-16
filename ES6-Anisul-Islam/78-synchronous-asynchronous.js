// synchronous programming ( blocking code behavior)

const taskOne = () => {
  console.log("task1");
};

const dataLoading = () => {
	console.log('Data Loading task 2')
}

const taskTwo = () => {
  setTimeout(dataLoading,2000)
};
const taskThree = () => {
  console.log("task3");
};
const taskFour = () => {
  console.log("task4");
};
const taskFive = () => {
  console.log("task5");
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
