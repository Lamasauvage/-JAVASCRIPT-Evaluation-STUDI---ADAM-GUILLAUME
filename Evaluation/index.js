// let saveEl = document.getElementById(global-count)
// let countEl = document.getElementById(count-el)
// let count = 0 

function getRandomDiceNumber() {
  let randomNumber = Math.floor( Math.random()*6 ) + 1
  if (randomNumber === 1) {
    console.log(0)
      return 0 // 0 = perte de tous les points 
  } else {
    console.log(randomNumber)
      return randomNumber 
  } 
}
