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
    console.log('CLICKED RESULT: ' + playRound());  

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

//play 1 round and record winner as a string

function playRound(playerSelection, computerSelection) {
  playerSelection = playerCHOICE();
  computerSelection = computerCHOICE();

  // console.log(playerSelection);
  // console.log(computerSelection);

  let winner = {
    'tie': `It's a tie. You and the computer both chose ${playerSelection}. Try again!`,
    'win': `You win! Your ${playerSelection} beats computer's ${computerSelection}. Let's play again!`,
    'lose': `You lose! Computer's ${computerSelection} beat your ${playerSelection}. Try again!`
  };
  
  let message = '';
  
  if (computerSelection == playerSelection) {
    message = winner.tie;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    message = winner.win;
  } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
    message = winner.win;
  } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    message = winner.win;
  } else {
    message = winner.lose;
  }
  
  return message;
};



function game() {
  let scoreStart = {
    'tie': 0,
    'computer': 0,
    'player': 0
  };

  let scoreRound = {};
  
  function getScore() {
    const result = playRound();
    console.log(result);  

    if (result.includes('tie')) {
      scoreStart['tie'] += 1;
      scoreRound = scoreStart;
    } else if (result.includes('win')) {
      scoreStart['player'] += 1;
      scoreRound = scoreStart;
    } else {
      scoreStart.computer += 1;
      scoreRound = scoreStart;
    }
    
    let roundResult = 
    `  ~ Scores ~  
    You've won: ${scoreRound.player} games.
    Computer's won: ${scoreRound.computer} games.
    You've tied: ${scoreRound.tie} games.`

    return roundResult;
  };

  // let i = 5;

  // while (i > 0) {
  //   console.log(getScore());
  //   i--;
  // };

  // if (scoreRound.player == scoreRound.computer) {
  //   console.log(`Looks like it's a tie game. Play again?`);
  // } else if (scoreRound.player > scoreRound.computer) {
  //   console.log(`Congratulations! You won this match! Play again?`);
  // } else {
  //   console.log(`Sorry... The computer won this match. Better luck next time!`);
  // }
};

