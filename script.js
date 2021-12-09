//Rock ~ Paper ~ Scissors: UI

const buttons = document.querySelectorAll('button');

// Add event listener to each button and ID which was clicked
buttons.forEach((button) => {
  button.addEventListener('click', 
  (e) => {  
    let buttonId = e.target.id;  
    let choice = document.getElementById(buttonId);
    // console.log(choice);
   
    //identifies element so it can be selected outside of the event handler
    choice.classList.toggle('inPlay'); 

    // allows id attribute to be passed as a variable
    playerCHOICE();
    console.log('CLICKED ON: ' + playerCHOICE());
    
    playRound();
    //console.log('CLICKED RESULT: ' + playRound());  

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
  playerSelection = playerCHOICE();
  computerSelection = computerCHOICE();

  console.log('PLAYER PICKED: ' + playerSelection);
  console.log('COMPUTER PICKED: ' + computerSelection);

  let message = '';
  let winner = {
    'tie': `It's a tie. You and the computer both chose ${playerSelection}. Try again!`,
    'player': `You win! Your ${playerSelection} beats computer's ${computerSelection}. Let's play again!`,
    'computer': `You lose! Computer's ${computerSelection} beat your ${playerSelection}. Try again!`
  };
  
  let scoreRound = {};
  
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
    
    messageArea.textContent = message;
    setTimeout(displayMessage, 1000);
    setTimeout(hideMessage, 4000);
    
    console.log(scoreRound);
    return message;
  };
  
function displayMessage() {
  messageBox.setAttribute('style', 'visibility: visible');
};

function hideMessage() {
  messageBox.setAttribute('style', 'visibility: hidden');
};

function game() {
 
  let i = 5;

  while (i > 0) {
    console.log(getScore());
    i--;
  };

  if (scoreRound.player == scoreRound.computer) {
    console.log(`Looks like it's a tie game. Play again?`);
  } else if (scoreRound.player > scoreRound.computer) {
    console.log(`Congratulations! You won this match! Play again?`);
  } else {
    console.log(`Sorry... The computer won this match. Better luck next time!`);
  }
};

