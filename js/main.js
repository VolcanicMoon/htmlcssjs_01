function mainFunction() {
  var addCardButtons = document.querySelectorAll(".kanban-add-card-btn");

  addCardButtons.forEach(function(el, i) {
    el.addEventListener("click", function(e) {
      var thisEl = e.currentTarget;
      var newCard = document.createElement("div")
      newCard.classList.add("kanban-card")
      newCard.innerText = "New Card"

      if (thisEl instanceof HTMLDivElement) {
        thisEl.before(newCard)
      }
    })
  });
}

mainFunction()
