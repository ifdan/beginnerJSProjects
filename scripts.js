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

// Tic Tac Toe
function ticTacToe(userBtns) {
  const userX = 'X';
  const userO = 'O';
  let user = ' ';
  var count = 0;
  const subHead = document.querySelector('.sub-heading');
  const boardParent = document.querySelector('.board-container');
  const board = Array.from(document.querySelectorAll('.board'));
  const X = [];
  const O = [];
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function pickUser(xo) {
    return xo;
  }

  for (let i = 0; i < userBtns.length; i++) {
    userBtns[i].addEventListener('click', () => {
      userBtns[0].style.display = 'none';
      userBtns[1].style.display = 'none';
      subHead.style.display = 'none';
      boardParent.style.display = 'flex';
      boardParent.classList.toggle('fade');
      if (i === 0) {
        user = pickUser(userX);
      } else {
        user = pickUser(userO);
      }
    });
  }

  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      board[i].innerHTML = user;
      if (user === userX) {
        X.push(i);
        user = userO;
      } else if (user === userO) {
        user = userX;
        O.push(i);
      }
      count++;
      winner(X, O, winConditions, count);
    }, {
      once: true
    });
  }

  function winner(X, O, winConditions, count) {
    let firstIndex = winConditions[0];
    let X0 = [];
    let O0 = [];
    for (let i = 0; i < firstIndex.length; i++) {
      if (X.includes(firstIndex[i])) {
        X0.push(firstIndex[i]);
        if (X0.length === 3) {
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(firstIndex[i])) {
        O0.push(firstIndex[i]);
        if (O0.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }

    let secondIndex = winConditions[1];
    let X1 = [];
    let O1 = [];
    for (let i = 0; i < secondIndex.length; i++) {
      if (X.includes(secondIndex[i])) {
        X1.push(secondIndex[i]);
        if (X1.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(secondIndex[i])) {
        O1.push(secondIndex[i]);
        if (O1.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }

    let thirdIndex = winConditions[2];
    let X2 = [];
    let O2 = [];
    for (let i = 0; i < thirdIndex.length; i++) {
      if (X.includes(thirdIndex[i])) {
        X2.push(thirdIndex[i]);
        if (X2.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(thirdIndex[i])) {
        O2.push(thirdIndex[i]);
        if (O2.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }

    let fourthIndex = winConditions[3];
    let X3 = [];
    let O3 = [];
    for (let i = 0; i < fourthIndex.length; i++) {
      if (X.includes(fourthIndex[i])) {
        X3.push(fourthIndex[i]);
        if (X3.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(fourthIndex[i])) {
        O3.push(fourthIndex[i]);
        if (O3.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }

    let fifthIndex = winConditions[4];
    let X4 = [];
    let O4 = [];
    for (let i = 0; i < fifthIndex.length; i++) {
      if (X.includes(fifthIndex[i])) {
        X4.push(fifthIndex[i]);
        if (X4.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(fifthIndex[i])) {
        O4.push(fifthIndex[i]);
        if (O4.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }

    let sixthIndex = winConditions[5];
    let X5 = [];
    let O5 = [];
    for (let i = 0; i < sixthIndex.length; i++) {
      if (X.includes(sixthIndex[i])) {
        X5.push(sixthIndex[i]);
        if (X5.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(sixthIndex[i])) {
        O5.push(sixthIndex[i]);
        if (O5.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }

    let seventhIndex = winConditions[6];
    let X6 = [];
    let O6 = [];
    for (let i = 0; i < seventhIndex.length; i++) {
      if (X.includes(seventhIndex[i])) {
        X6.push(seventhIndex[i]);
        if (X6.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(seventhIndex[i])) {
        O6.push(seventhIndex[i]);
        if (O6.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }

    let eigthIndex = winConditions[7];
    let X7 = [];
    let O7 = [];
    for (let i = 0; i < eigthIndex.length; i++) {
      if (X.includes(eigthIndex[i])) {
        X7.push(eigthIndex[i]);
        if (X7.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userX} Is the Winner!`;
          subHead.style.display = 'block';
        }
      } else if (O.includes(eigthIndex[i])) {
        O7.push(eigthIndex[i]);
        if (O7.length === 3) {
          boardParent.style.display = 'none';
          boardParent.style.display = 'none';
          subHead.innerHTML = `${userO} Is the Winner!`;
          subHead.style.display = 'block';
        }
      }
    }
    if (count === 9 && X0.length !== 3 && O0.length !== 3 && X1.length !== 3 && O1.length !== 3 && X2.length !== 3 && O2.length !== 3 && X3.length !== 3 && O3.length !== 3 && X4.length !== 3 && O4.length !== 3 && X5.length !== 3 && O5.length !== 3 && X0.length !== 3 && O0.length !== 3 && X6.length !== 3 && O6.length !== 3 && X7.length !== 3 && O7.length !== 3) {
      boardParent.style.display = 'none';
      subHead.innerHTML = 'Tie!';
      subHead.style.display = 'block';
    }
  }
}

// Analog Clock
function getTime() {
  const today = new Date();
  const minutes = today.getMinutes();
  const hours = today.getHours();
  const seconds = today.getSeconds();
  const secondsLine = document.querySelector('.analog-line-seconds');
  const minutesLine = document.querySelector('.analog-line-minutes');
  const hoursLine = document.querySelector('.analog-line-hours');
  const rotateLineSeconds = (seconds * 6) - 90;
  const rotateLineMinutes = (minutes * 6) - 90;
  const rotateLineHours = (hours * 30) - 90;
  secondsLine.style.rotate = (`${rotateLineSeconds}deg`);
  minutesLine.style.rotate = (`${rotateLineMinutes}deg`);
  hoursLine.style.rotate =  (`${rotateLineHours}deg`);
}