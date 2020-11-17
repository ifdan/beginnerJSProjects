// Change Background
function changeBackground(btn) {
  btn.addEventListener('click', () => {
    const colors = ['#311D3F', '#522546', '#88304E', '#E23E57', '#FFFFFF'];
    let randomColor = Math.floor(Math.random() * colors.length);
    document.querySelector('body').style.backgroundColor = colors[randomColor];
  });
}

// Letter Counter
function count(counter) {
  const inputField = document.querySelector('#inputField');
  counter.innerText = 0;
  inputField.value = '';
  inputField.addEventListener('keyup', () => {
    counter.innerText = inputField.value.length;
  });
}

// Counter
function countNumber(currentCount) {
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
}

// To Do List
function listItem(createListItem) {
  const addToYourList = document.querySelector('#listFields');
  createListItem.addEventListener('click', () => {
    const childContainer = document.querySelector('#childContainer');
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