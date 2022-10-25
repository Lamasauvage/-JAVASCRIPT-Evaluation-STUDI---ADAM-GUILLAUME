let firstCard = 13
let secondCard = 8
let sum = firstCard + secondCard

if (sum < 21) {
  console.log("Do you want to draw another card ? 😀")
} else if (sum === 21) {
  console.log("GG 🤩")  
} else if (sum > 21) {
  console.log("You lost 😭")
}

