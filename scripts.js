// Change Background
const background = document.querySelector('body');
const btn = document.querySelector('#buttonBackground');
const header = document.querySelector('h1');

if (btn) {
  btn.addEventListener('click', () => {
    const colors = ['#311D3F', '#522546', '#88304E', '#E23E57', '#FFFFFF'];
    let randomColor = Math.floor(Math.random() * colors.length);
    background.style.backgroundColor = colors[randomColor];
  });
}

// Letter Counter
const inputField = document.querySelector('#inputField');
let counter = document.querySelector('#outputText');
if (counter) {
  counter.innerText = 0;
  inputField.value = '';

  inputField.addEventListener('keyup', () => {
    counter.innerText = inputField.value.length;
  });
}

// Counter
const currentCount = document.querySelector('#currentCount');
let countNumber = 0;
const decrease = document.querySelector('#decreaseButton');
const increase = document.querySelector('#increaseButton');
if (increase) {
  increase.addEventListener('click', () => {
    countNumber++;
    currentCount.innerHTML = countNumber;
  });
  decrease.addEventListener('click', () => {
    countNumber--;
    currentCount.innerHTML = countNumber;
  });
}

// To Do List
const createListItem = document.querySelector('#toDoBtn');
const addToYourList = document.querySelector('#listFields');
const childContainer = document.querySelector('#childContainer');

if (createListItem) {
  createListItem.addEventListener('click', () => {
    const removeListContainer = document.createElement('div');
    const childListItem = document.createElement('input');
    const removeBtn = document.createElement('button');

    removeListContainer.className = 'addContainer';
    childListItem.className = 'toDoField';
    removeBtn.className = 'removeItemBtn';
    removeBtn.innerText = 'Remove';

    childContainer.appendChild(removeListContainer);
    removeListContainer.appendChild(childListItem);
    removeListContainer.appendChild(removeBtn);
    childListItem.value = addToYourList.value;
    addToYourList.value = '';

    const itemRemoveBtn = document.querySelectorAll('.removeItemBtn');
    if (itemRemoveBtn[0]) {
      const itemContainer = document.querySelectorAll('.addContainer');  
      for (let i = 0; i < itemRemoveBtn.length; i++) {      
        itemRemoveBtn[i].addEventListener('click', () => {
          itemContainer[i].remove();
        });
      }
    }       
  });
}