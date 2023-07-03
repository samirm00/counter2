// DOM elements
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const value = document.querySelector('#value');

// Variables
let count = 0;

// Helper function
const setCount = (count) => {
    value.innerText = count;
    if (count > 0) {
        value.style.color = 'green';
    } else if (count < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = '#222';
    }
};

// Handlers
const increaseCounter = () => {
    count++;
    setCount(count);
};
const decreaseCounter = () => {
    count--;
    setCount(count);
};
const resetCounter = () => {
    count = 0;
    setCount(count);
};

// Listeners
increase.addEventListener('click', increaseCounter);
decrease.addEventListener('click', decreaseCounter);
reset.addEventListener('click', resetCounter);
