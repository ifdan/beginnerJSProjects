const playerAssignment = document.querySelectorAll('.tic-tac-toe-button');

function Player(identity) {
  this.identity = identity;
  this.activePositions = [];
  this.positions = function (index) {
    return this.activePositions.push(index);
  }
}

Player.numberOfPlayers = [];
Player.prototype.howToWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function removeNode(parentNode) {
  const removedNode = parentNode.remove();
  return removedNode;
}

// I should build the game dynamically.
function showNode(node) {
  const shownNode = node.style.opacity = '1';
  return shownNode;
}

function createPlayers(index) {
  playerAssignment.forEach(function () {
    return index !== 0 ? Player.numberOfPlayers.push(new Player(index--)) : Player.numberOfPlayers.push(new Player(index++));
  });
}

// I don't like to depend on explicity stating the players.
function addBoardPosition(players, index, position) {
  if (players[0].activePositions.length === players[1].activePositions.length) {
    players[0].activePositions.push(index);
    position.innerHTML = 'X';
  } else {
    players[1].activePositions.push(index);
    position.innerHTML = 'O';
  }
}

// I don't like that I'm iterating more than I need.
function checkForWin(players, howToWin) {
  howToWin.forEach(function (element) {
    players.forEach(function (player) {
      let winner = element.filter(moves => player.activePositions.includes(moves));
      return winner.length > 2 ? removeNode(document.querySelector('.board-container')) : console.log("no winner");
    });
  });
}

playerAssignment.forEach(function (element, index) {
  element.addEventListener('click', function () {
    createPlayers(index);
    removeNode(element.parentNode);
    showNode(document.querySelector('.board-container'));
  });
});

document.querySelectorAll('.board').forEach(function (element, index) {
  element.addEventListener('click', function (e) {
    addBoardPosition(Player.numberOfPlayers, index, e.target);
    checkForWin(Player.numberOfPlayers, Player.prototype.howToWin);
  }, {
    once: true
  });
});