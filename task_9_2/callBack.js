// Code here for the callbacks task

let intervalID; // Set variables to hold the intervalID
let counter = 1; // and also a counter

let startCounter = function () {
  intervalID = setInterval(() => {
    console.log(counter); //output counter to console
    counter += 1; //increment the counter
  }, 1000); //set interval at 1 second(1000ms)
};

function stopCounter() {
  clearInterval(intervalID); //clearInterval uses the reference of the setInterval ID to stop the current counter
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// The event listener below is missing a callback function argument;
// this button should start the outputting of the counter to the console
startButton.addEventListener('click', startCounter);

// The event listener below is missing a callback function argument;
// this button should the counter from outputting to the console
stopButton.addEventListener('click', stopCounter);
