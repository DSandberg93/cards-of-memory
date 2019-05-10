let cardFaceList = ["airbnb", "airbnb", "adobe", "adobe", "amazon", "amazon", "app-store", "app-store", "apple", "apple", "blogger", "blogger", "battle-net", "battle-net", "bluetooth", "bluetooth"]

let moveCounter = 0;
let totalSeconds = 0;
let started = false;

const setUpCards = () => {
  cardFaceList.sort(() => Math.random() - 0.5);
  let gameBoard = document.querySelector(".game-board");
  for (let i = 0; i < cardFaceList.length; i++) {
    let cardNode = document.createElement('div');
    cardNode.classList.add("card");
    let faceNode = document.createElement('div');
    faceNode.classList.add("card-face");
    faceNode.id = (cardFaceList[i]);
    let iconNode = document.createElement('i');
    iconNode.classList.add("fab");
    iconNode.classList.add("fa-" + cardFaceList[i]);
    iconNode.classList.add("face-icon");
    faceNode.appendChild(iconNode);
    cardNode.appendChild(faceNode);
    gameBoard.appendChild(cardNode);
  }
}

const resetBoard = () => {
  let gameBoard = document.querySelector(".game-board");
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
  setUpCards();
  setUpCardListeners();
  moveCounter = 0;
  document.querySelector(".move-counter").textContent = moveCounter;
  totalSeconds = 0;
  document.querySelector(".timer").textContent = totalSeconds;
  started = false;
}

const setUpReplayButton = () => {
  let replayButton = document.querySelector(".replay-button");
  let replayModal = document.querySelector(".replay-modal");
  replayButton.addEventListener("click", () => {
    console.log("Play Again");
    replayModal.style.display = "none";
    resetBoard();
  });
}

const setUpCardListeners = () => {
  let cardArray = document.querySelectorAll(".card-face");
  cardArray.forEach(function(card) {
    card.addEventListener("click", cardClick);
  });
}

const incrementMoveCounter = () => {
  moveCounter++;
  document.querySelector(".move-counter").textContent = moveCounter;
}

const cardClick = (event) => {
  if (!started) {
    started = true;
  }
  let target;
  if (event.target.classList.contains("face-icon")) {
    target = event.target.parentElement;
  } else {
    target = event.target;
  }

  if (!target.classList.contains("show")) {
    target.classList.add("show");

    let activeList = document.querySelectorAll(".active");
    if (activeList.length <= 1) {
      target.classList.add("active");
    }
    activeList = document.querySelectorAll(".active");
    if (activeList.length === 2) {
      if (activeList[0].id === activeList[1].id) {
        activeList[0].classList.add("matched");
        activeList[1].classList.add("matched");
      } else {
        setTimeout(() => {
          activeList[0].classList.remove("show");
          activeList[1].classList.remove("show");
        }, 800);
      }
      incrementMoveCounter();
      activeList[0].classList.remove("active");
      activeList[1].classList.remove("active");
    }
  }

  matchedList = document.querySelectorAll(".matched");
  if (matchedList.length === cardFaceList.length) {
    let replayModal = document.querySelector(".replay-modal");
    replayModal.querySelector(".final-time").textContent = totalSeconds;
    replayModal.querySelector(".final-move-count").textContent = moveCounter;
    replayModal.style.display = "flex";
    started = false;
  }
}

setUpCards();
setUpCardListeners();
setUpReplayButton();
document.querySelector(".restart").addEventListener("click", resetBoard);
setInterval(() => {
  if (started) {
    totalSeconds++;
    document.querySelector(".timer").textContent = totalSeconds;
  }
}, 1000);
