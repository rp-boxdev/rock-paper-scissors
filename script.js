const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultsDisplay = document.querySelector("#resultsDisplay");
const resultsStyle = document.querySelector("#resultsDisplay").style;
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const message3 = document.querySelector(".message3");

//styling for the results display
resultsStyle.textContent = "hello";
resultsStyle.marginTop = "10px";
resultsStyle.padding = "10px";
resultsStyle.width = "50%";
resultsStyle.height = "70px";
resultsStyle.backgroundColor = "#808080";
resultsStyle.border = "2px solid black";

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let ties = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    message1.textContent = `You chose: ${playerSelection}`;
    message2.textContent = `Computer chose: ${computerSelection}`;
    ties++;
    message3.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore} \n Ties: ${ties}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    message1.textContent = `You chose: ${playerSelection}`;
    message2.textContent = `Computer chose: ${computerSelection}`;
    playerScore++;
    message3.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore} \n Ties: ${ties}`;
  } else {
    message1.textContent = `You chose: ${playerSelection}`;
    message2.textContent = `Computer chose: ${computerSelection}`;
    computerScore++;
    message3.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore} \n Ties: ${ties}`;
  }
  rounds++;
  if (rounds === 5) {
    const winnerMessage = document.createElement("div");
    winnerMessage.classList.add("winner");
    resultsDisplay.appendChild(winnerMessage);
    if (playerScore === computerScore) {
      winnerMessage.textContent = "It's a tie!";
    } else if (playerScore > computerScore) {
      winnerMessage.textContent = "You win!";
    } else {
      winnerMessage.textContent = "Computer wins.";
    }
  }
}

function displayWinner() {
  let winner;
  if (playerScore === computerScore) {
    winner = "It's a tie!";
  } else if (playerScore > computerScore) {
    winner = "You win!";
  } else {
    winner = "Computer wins.";
  }
  return winner;
}

//button click functionality
rockBtn.addEventListener("click", (e) => {
  playRound("Rock");
});

paperBtn.addEventListener("click", (e) => {
  playRound("Paper");
});

scissorsBtn.addEventListener("click", (e) => {
  playRound("Scissors");
});
