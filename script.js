let cardFaceList = ["airbnb", "airbnb", "adobe", "adobe", "amazon", "amazon", "app-store", "app-store", "apple", "apple", "blogger", "blogger", "battle-net", "battle-net", "bluetooth", "bluetooth"]

cardFaceList.sort(() => Math.random() - 0.5);

const setUpCards = () => {
  let gameBoard = document.querySelector(".game-board");
  for (let i = 0; i < cardFaceList.length; i++) {
    let cardNode = document.createElement('div');
    cardNode.classList.add("card");
    let faceNode = document.createElement('div');
    faceNode.classList.add("card-face");
    let iconNode = document.createElement('i');
    iconNode.classList.add("fab");
    iconNode.classList.add("fa-" + cardFaceList[i]);
    iconNode.classList.add("face-icon");
    faceNode.appendChild(iconNode);
    cardNode.appendChild(faceNode);
    gameBoard.appendChild(cardNode);
  }
}

setUpCards();
// setUpCardFaces();

const setUpCardListeners = () => {
  let cardArray = document.querySelectorAll(".card-face");
  cardArray.forEach(function(card) {
    card.addEventListener("click", cardClick);
  });
}

const cardClick = (event) => {
  console.log(event.target);
  if (event.target.classList.contains("face-icon")){
    console.log("face icon");
    event.target.parentElement.classList.toggle("show");
  } else {
    console.log("card face");
    event.target.classList.toggle("show");
  }
}

setUpCardListeners();
