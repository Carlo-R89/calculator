// Operators functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Functions
const operate = (n1, n2, op) => {
  switch (op) {
    case '+':
      return add(n1, n2);
    case '-':
      return subtract(n1, n2);
    case 'x':
      return multiply(n1, n2);
    case '/':
      return divide(n1, n2);
  }
};

function equal(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (/\d/.test(arr[i])) {
      arr[i] = parseFloat(arr[i]);
    }
  }
  let x = 0;
  while (arr.length >= 3) {
    x = operate(arr[0], arr[2], arr[1]);
    if (arr[2] === 0 && arr[1] === '/') {
      return 'Are you nuts?';
    }
    arr.splice(0, 3, x);
  }
  return Number.isInteger(x) ? x : x.toFixed(2);
}

// Variables
const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.btn-nums');
const opButtons = document.querySelectorAll('.btn-op');
const equalBtn = document.querySelector('.btn-equal');
const clear = document.getElementById('clear');
const delBtn = document.querySelector('.delete-btn');

// Events
numButtons.forEach((b) => {
  b.addEventListener('click', () => {
    display.textContent = display.textContent.concat(b.textContent);
  });
});

opButtons.forEach((b) => {
  b.addEventListener('click', () => {
    display.textContent = display.textContent.concat(' ' + b.textContent + ' ');
  });
});

clear.addEventListener('click', () => {
  display.textContent = '';
});

equalBtn.addEventListener('click', () => {
  let arr = display.textContent.split(' ');
  display.textContent = equal(arr);
});

delBtn.addEventListener('click', () => {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
});
