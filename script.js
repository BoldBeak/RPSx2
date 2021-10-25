//Rock ~ Paper ~ Scissors: Console Game

const CHOICE = ["rock", "paper", "scissors"];

function computerCHOICE() {
  return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playerCHOICE() {
  //return CHOICE[Math.floor(Math.random() * CHOICE.length)];
  
  let playerInput = prompt("Choose Rock, Paper, or Scissors");
  return playerInput.toLocaleLowerCase();
}

console.log(computerCHOICE());
console.log(playerCHOICE());