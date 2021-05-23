function mainFunction() {
  var cardNumber = 1;
  var addCardButton = document.querySelectorAll(".board .column .add-card-button");
  addCardButton.forEach(function(el,i){
    el.addEventListener("click", function(event){
      if (event.currentTarget instanceof HTMLDivElement) {
        var card = createCard(event.currentTarget.parentElement.parentElement, "title" + cardNumber, "description" + cardNumber);
        event.currentTarget.before(card);
        cardNumber += 1;
      }
    });
  })
}

function createCard(columnEl, title, description) {
  var card = document.createElement("div");
  card.classList.add("card");
  var deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "X";
  card.append(deleteButton);
  var titleDiv = document.createElement("div");
  titleDiv.classList.add("card-title");
  titleDiv.innerText = title;
  card.append(titleDiv);
  var descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("card-description");
  descriptionDiv.innerText = description;
  card.append(descriptionDiv);

  

  var moveUp = document.createElement("div");
  moveUp.classList.add("move-up", "move-button");
  moveUp.innerText = "↑";
  card.append(moveUp);
  var moveDown = document.createElement("div");
  moveDown.classList.add("move-down", "move-button");
  moveDown.innerText = "↓";
  card.append(moveDown);
  

 
  var moveLeft = document.createElement("div");
  moveLeft.classList.add("move-left", "move-button");
  moveLeft.innerText = "←";
  card.append(moveLeft);
  var moveRight = document.createElement("div");
  moveRight.classList.add("move-right", "move-button");
  moveRight.innerText = "→";
  card.append(moveRight);
  deleteButton.addEventListener("click", function(event){
    var currentCard = card;
    currentCard.remove()
  })
  return card;
}


mainFunction();
