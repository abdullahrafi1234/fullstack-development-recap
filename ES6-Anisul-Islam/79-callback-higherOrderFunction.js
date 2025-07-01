// callback and higher order function

function square(x) {
  console.log(x * x);
}

// square(25)

// const y = square
// y(5)

function higherOrderFunction(num, callbackFunction) {
  callbackFunction(num);
}
// jei function ti onno function k argument hishebe receive korlo take higher order function bole,,,,, and jei function k receive korlo take callback function bole =====>

higherOrderFunction(6, square);

const taskOne = (callback) => {
  console.log("task1");
  callback();
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("task2 , Data loading");
    callback();
  }, 2000);
};
const taskThree = (callbackFunction) => {
  console.log("task3");
  callbackFunction();
};
const taskFour = (callback) => {
  console.log("task4");
  callback()
};
const taskFive = () => {
  console.log("task5");
};

// call disi
taskOne(function f1() {
  taskTwo(function f2() {
    taskThree(() => {
      taskFour(() => {
        taskFive();
      });
    });
  });
});


// callback function use in button

document.querySelector('button').addEventListener('click', ()=> {
	console.log('hi this is callback functions example')
})