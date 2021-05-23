function mainFunction() {
  var cardNumber = 1;
  var addCardButton = document.querySelectorAll(".board .column .add-card-button");
  addCardButton.forEach(function(el,i){
    el.addEventListener("click", function(event){
      if (event.currentTarget instanceof HTMLDivElement) {
        var card = createCard("title" + cardNumber, "description" + cardNumber);
        event.currentTarget.before(card);
        cardNumber += 1;
      }
    });
  })
}



function createCard(title, description) {
  var card = document.createElement("div");
  card.classList.add("card");

  var deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button", "no-select");
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

  var moveButtonsContainer = document.createElement("div");
  moveButtonsContainer.classList.add("move-buttons-container");

  var moveLeft = document.createElement("div");
  moveLeft.classList.add("move-left", "move-button");
  moveLeft.innerText = "←";
  moveButtonsContainer.append(moveLeft);
  moveLeft.addEventListener("click", function(event){
    if (event.currentTarget instanceof HTMLDivElement) {
      var parentColumn = event.currentTarget.parentElement.parentElement.parentElement.parentElement
      var currentCard = card;
      parentColumn.previousElementSibling.querySelector(".add-card-button").before(currentCard);
    }
  })

  var moveUp = document.createElement("div");
  moveUp.classList.add("move-up", "move-button");
  moveUp.innerText = "↑";
  moveButtonsContainer.append(moveUp);
  moveUp.addEventListener("click", function(event){
    var currentCard = card;
    currentCard.previousElementSibling.before(currentCard);
  })

  var moveDown = document.createElement("div");
  moveDown.classList.add("move-down", "move-button");
  moveDown.innerText = "↓";
  moveButtonsContainer.append(moveDown);
  moveDown.addEventListener("click", function(event){
    var currentCard = card;
    currentCard.nextElementSibling.after(currentCard);
  })

  var moveRight = document.createElement("div");
  moveRight.classList.add("move-right", "move-button");
  moveRight.innerText = "→";
  moveButtonsContainer.append(moveRight);
  moveRight.addEventListener("click", function(event){
    if (event.currentTarget instanceof HTMLDivElement) {
      var parentColumn = event.currentTarget.parentElement.parentElement.parentElement.parentElement
      var currentCard = card;
      parentColumn.nextElementSibling.querySelector(".add-card-button").before(currentCard);
    }
  })
  card.append(moveButtonsContainer);
  deleteButton.addEventListener("click", function(event){
    var currentCard = card;
    currentCard.remove()
  })
  return card;
}


mainFunction();
