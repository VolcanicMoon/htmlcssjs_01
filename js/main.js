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

function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("my-id", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
 }

 window.dragover_handler = function(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move"
  var currentTargetRect = ev.currentTarget.getBoundingClientRect();
  if (ev.clientY > currentTargetRect.y + currentTargetRect.height / 2) {
      ev.currentTarget.style.borderBottom = "1px solid cyan";
      ev.currentTarget.style.borderTop = "1px solid transparent";
  }
  else {
    ev.currentTarget.style.borderTop = "1px solid cyan";
    ev.currentTarget.style.borderBottom = "1px solid transparent";
  }  
 }

 function dragleave_handler(ev) {
  ev.preventDefault();
  ev.currentTarget.style.borderBottom = "1px solid transparent";
  ev.currentTarget.style.borderTop = "1px solid transparent";
 }

 window.drop_handler = function(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("my-id");
  if (ev.target.classList.contains("card")) {
    var currentTargetRect = ev.currentTarget.getBoundingClientRect();
    if (ev.clientY > currentTargetRect.y + currentTargetRect.height / 2) {
      ev.target.after(document.getElementById(data));
    }
    else {
      ev.target.before(document.getElementById(data));
    }
  }
  ev.currentTarget.style.borderBottom = "1px solid transparent";
  ev.currentTarget.style.borderTop = "1px solid transparent";
}
 
function createCard(title, description) {
  var card = document.createElement("div");
  card.classList.add("card");
  card.draggable = true;
  card.id = title;
  card.ondragstart = dragstart_handler;
  card.ondrop = drop_handler;
  card.ondragover = dragover_handler;
  card.ondragleave = dragleave_handler;
  
  var deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button", "no-select");
  deleteButton.innerText = "X";
  card.append(deleteButton);

  var titleDiv = document.createElement("div");
  titleDiv.contentEditable = true;
  titleDiv.classList.add("card-title");
  titleDiv.innerText = title;
  card.append(titleDiv);

  var descriptionDiv = document.createElement("div");
  descriptionDiv.contentEditable = true;
  descriptionDiv.classList.add("card-description");
  descriptionDiv.innerText = description;
  card.append(descriptionDiv);

  var moveButtonsContainer = document.createElement("div");
  moveButtonsContainer.classList.add("move-buttons-container");

  var moveLeft = document.createElement("div");
  moveLeft.classList.add("move-left", "move-button", "no-select");
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
  moveUp.classList.add("move-up", "move-button", "no-select");
  moveUp.innerText = "↑";
  moveButtonsContainer.append(moveUp);
  moveUp.addEventListener("click", function(event){
    var currentCard = card;
    currentCard.previousElementSibling.before(currentCard);
  })

  var moveDown = document.createElement("div");
  moveDown.classList.add("move-down", "move-button", "no-select");
  moveDown.innerText = "↓";
  moveButtonsContainer.append(moveDown);
  moveDown.addEventListener("click", function(event){
    var currentCard = card;
    currentCard.nextElementSibling.after(currentCard);
  })

  var moveRight = document.createElement("div");
  moveRight.classList.add("move-right", "move-button", "no-select");
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
