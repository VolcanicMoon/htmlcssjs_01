function mainFunction() {
  var addCardButtons = document.querySelectorAll(".kanban-add-card-btn");

  addCardButtons.forEach(function(el, i) {
    el.addEventListener("click", function(e) {
      var thisEl = e.currentTarget;
      var newCard = document.createElement("div")
      newCard.classList.add("kanban-card")
      newCard.innerText = "New Card"

      var titleLabel = document.createElement("label")
      titleLabel.innerText = "Title"
      titleLabel.classList.add("kanban-card-title")
      newCard.append(titleLabel)

      var titleInput = document.createElement("input")
      titleInput.type = "text"
      titleInput.placeholder = "Card Title"
      titleInput.classList.add("kanban-card-input")

      if (thisEl instanceof HTMLDivElement) {
        thisEl.before(newCard)
      }
    })
  });
}

mainFunction()
