//Rock ~ Paper ~ Scissors: UI

const buttons = document.querySelectorAll('button');

// Add event listener to each button and ID which was clicked
buttons.forEach((button) => {
  button.addEventListener('click', 
  (e) => {  
    let buttonId = e.target.id;  
    let choice = document.getElementById(buttonId);
    
    //identifies element so it can be selected for variable assignment outside of the event handler
    choice.classList.toggle('inPlay'); 

    playerCHOICE();
    
    playRound(); 

    setTimeout(game, 5000);
    
    // removes inPlay class to reset for another round
    choice.classList.toggle('inPlay');
  });
});


//get player's selection for use as variable
function playerCHOICE() {
  let roundPlay = document.querySelector('button.inPlay');
  let roundPlayName = roundPlay.id;
  return roundPlayName;
};

//get computer's selection for use as variable
function computerCHOICE() {
  let CHOICE = ["rock", "paper", "scissors"];
  return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

let scoreStart = {
  'tie': 0,
  'player': 0,
  'computer': 0
  };

let scoreRound = {};

let tieTally = document.querySelector('#tieScore')
let playerTally = document.querySelector('#playerScore');
let computerTally = document.querySelector('#computerScore');

tieTally.value = scoreStart.tie;
playerTally.value = scoreStart.player;
computerTally.value = scoreStart.computer;

let messageBox = document.querySelector('.messageBox');
let messageArea = document.querySelector('.messageArea');


//play 1 round and record winner as a string
function playRound(playerSelection, computerSelection) {
  // get player and computer selections for comparison
  playerSelection = playerCHOICE();
  computerSelection = computerCHOICE();


  let message = '';
  let winner = {
    'tie': `It's a tie. You and the computer both chose ${playerSelection}. Try again!`,
    'player': `You win! Your ${playerSelection} beats computer's ${computerSelection}. Let's play again!`,
    'computer': `You lose! Computer's ${computerSelection} beat your ${playerSelection}. Try again!`
  };
  
  // compare and determine winner
    if (computerSelection == playerSelection) {
      message = winner.tie;
      scoreStart.tie += 1;
      scoreRound = scoreStart;
      tieTally.value = scoreRound.tie;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
      message = winner.player;
      scoreStart.player += 1;
      scoreRound = scoreStart;
      playerTally.value = scoreRound.player;
    } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
      message = winner.player;
      scoreStart.player += 1;
      scoreRound = scoreStart;
      playerTally.value = scoreRound.player;
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
      message = winner.player;
      scoreStart.player += 1;
      scoreRound = scoreStart;
      playerTally.value = scoreRound.player;
    } else {
      message = winner.computer;
      scoreStart.computer += 1;
      scoreRound = scoreStart;
      computerTally.value = scoreRound.computer;
    }
    
    // display round winner announcement then hide on click
    messageArea.textContent = message;
    setTimeout(displayMessage, 1000);
    messageBox.addEventListener('click', hideMessage);

    // pass winner to next function
    return message;
};
  
  
function displayMessage() {
  messageBox.setAttribute('style', 'visibility: visible');
};

function hideMessage() {
  messageBox.setAttribute('style', 'visibility: hidden');
};

function game() {
  let roundSum = +playerTally.value + +computerTally.value + +tieTally.value;
  
  if (roundSum === 5) {
    if (playerTally.value == computerTally.value) {
      matchMessage = `Looks like it's a tie game. Play again?`;
    } else if (playerTally.value > computerTally.value) {
      matchMessage = `Congratulations! You won this match! Play again?`;
    } else {
      matchMessage = `Sorry... The computer won this match. Better luck next time!`;
    }

    messageArea.textContent = matchMessage;

    messageBox.addEventListener('click', resetGame);  
  };

  function resetGame() {
    roundSum = 0;
    playerTally.value = 0;
    tieTally.value = 0;
    computerTally.value = 0;
    scoreStart.tie = 0;
    scoreStart.player = 0;
    scoreStart.computer = 0;
    messageBox.setAttribute('style', 'hidden');
    
    messageBox.removeEventListener('click', resetGame);
  }

};

