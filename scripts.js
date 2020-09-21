// Change Background
const background = document.querySelector('body');
const btn = document.querySelector('#buttonBackground');
const header = document.querySelector('h1');

btn.addEventListener('click', () => {
  const colors = ['#311D3F', '#522546', '#88304E', '#E23E57', '#FFFFFF'];
  let randomColor = Math.floor(Math.random() * colors.length);
  background.style.backgroundColor = colors[randomColor];
});

// Letter Counter
const inputField = document.querySelector('#inputField');
let counter = document.querySelector('#outputText');
counter.innerText = 0;
inputField.value = '';

inputField.addEventListener('keyup', () => {
  counter.innerText = inputField.value.length;
});

// Counter
const currentCount = document.querySelector('#currentCount');
let countNumber = 0;
const decrease = document.querySelector('#decreaseButton');
const increase = document.querySelector('#increaseButton');
increase.addEventListener('click', () => {
  countNumber++;
  currentCount.innerHTML = countNumber;
});
decrease.addEventListener('click', () => {
  countNumber--;
  currentCount.innerHTML = countNumber;
});