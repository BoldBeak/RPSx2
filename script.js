//Rock ~ Paper ~ Scissors: Console Game

//available selections
let CHOICE = ["rock", "paper", "scissors"];

//get computer's selection (store in var)
function computerCHOICE() {
  return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

//get's human's selection (store in var)
function playerCHOICE() {
  //return CHOICE[Math.floor(Math.random() * CHOICE.length)];
  
  let playerInput = prompt("Choose Rock, Paper, or Scissors");

  let testInput = playerInput.toLowerCase();

  while (CHOICE.includes(testInput) != true) {
    testInput = prompt(`Oops! Check your spelling and try again.
    
    Rock, Paper, or Scissors?`);
  } 
  return testInput;
}
// Test output
//console.log(computerSelection);
//console.log(playerSelection);
// works

//play 1 round and record winner

function playRound(playerSelection, computerSelection) {
  let scoreStart = {
      'tie': 0,
      'computer': 0,
      'player': 0
    }
    
  let scoreRound = {};
  
  playerSelection = playerCHOICE();
  computerSelection = computerCHOICE();

  console.log(playerSelection);
  console.log(computerSelection);
  
  if (computerSelection == playerSelection) {
    scoreStart['tie'] += 1;
    scoreRound = scoreStart;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    scoreStart['player'] += 1;
    scoreRound = scoreStart;
  } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
    scoreStart['player'] += 1;
    scoreRound = scoreStart;
  } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
  scoreStart['player'] += 1;    
    scoreRound = scoreStart;
  } else {
    scoreStart.computer += 1;
    scoreRound = scoreStart;
  }
  
  return scoreRound;
}

console.log(playRound());