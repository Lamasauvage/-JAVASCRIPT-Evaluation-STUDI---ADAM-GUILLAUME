function rollDice() {
  let randomNumber = Math.floor( Math.random()*6 ) + 1
  if (randomNumber === 1) {
      return 0 // 0 = perte de tous les points 
  } else {
      return randomNumber 
  } 
}