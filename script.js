let cardFaceList = ["airbnb", "airbnb", "adobe", "adobe", "amazon", "amazon", "app-store", "app-store", "apple", "apple", "blogger", "blogger", "battle-net", "battle-net", "bluetooth", "bluetooth"]

cardFaceList.sort(() => Math.random() - 0.5);

const setUpCards = () => {
  let gameBoard = document.querySelector(".game-board");
  for (let i = 0; i < cardFaceList.length; i++) {
    let cardNode = document.createElement('div');
    cardNode.classList.add("card");
    gameBoard.appendChild(cardNode);
  }
}

const setUpCardFaces = () => {
  let cardArray = document.querySelectorAll(".card");
  for (let i = 0; i < cardFaceList.length; i++) {
    let faceNode = document.createElement('i');
    faceNode.classList.add("fab");
    faceNode.classList.add("fa-" + cardFaceList[i]);
    faceNode.classList.add("card-face");
    cardArray[i].appendChild(faceNode);
  }
}

setUpCards();
setUpCardFaces();

const setUpCardListeners = () => {
  let cardArray = document.querySelectorAll(".card-face");
  cardArray.forEach(function(card) {
    card.addEventListener("click", cardClick);
  })
}

const cardClick = (event) => {
  event.target.style.opacity = 1;
}

setUpCardListeners();
