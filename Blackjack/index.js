let firstCard = 13
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw another card ? 😀"
  } else if (sum === 21) {
    message = "GG 🤩"
    hasBlackJack = true 
  } else {
    message = "You lost 😭"
    isAlive = false
  }
  console.log(message)
}