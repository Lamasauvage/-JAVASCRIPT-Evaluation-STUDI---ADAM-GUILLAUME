let firstCard = 13
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw another card ?"
  } else if (sum === 21) {
    message = "GG"
    hasBlackJack = true 
  } else {
    message = "You lost"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  
}