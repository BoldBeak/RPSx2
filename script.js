//Rock ~ Paper ~ Scissors: Console Game

let CHOICE = ["rock", "paper", "scissors"];

function computerCHOICE() {
  return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playerCHOICE() {
  //return CHOICE[Math.floor(Math.random() * CHOICE.length)];
  
  let playerInput = prompt("Choose Rock, Paper, or Scissors");
  //return playerInput.toLocaleLowerCase();

  let testInput = playerInput.toLowerCase();

  if (CHOICE.includes(testInput) != true) {
    prompt(`Oops! Check your spelling and try again!
    
    Rock, Paper, or Scissors?`);
  } else return testInput;
}

console.log(computerCHOICE());
console.log(playerCHOICE());