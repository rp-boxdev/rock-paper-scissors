const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
// const resultsDisplay = document.querySelector("#resultsDisplay");
const resultsStyle = document.querySelector("#resultsDisplay").style;
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const message3 = document.querySelector(".message3");

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
    message3.textContent = `It's a tie!`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    message1.textContent = `You chose: ${playerSelection}`;
    message2.textContent = `Computer chose: ${computerSelection}`;
    message3.textContent = `You win!`;
  } else {
    message1.textContent = `You chose: ${playerSelection}`;
    message2.textContent = `Computer chose: ${computerSelection}`;
    message3.textContent = `Computer wins.`;
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
// }

// game();

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

//styling for the results display
resultsStyle.textContent = "hello";
resultsStyle.marginTop = "10px";
resultsStyle.paddingTop = "10px";
resultsStyle.paddingLeft = "10px";
resultsStyle.width = "50%";
resultsStyle.height = "70px";
resultsStyle.backgroundColor = "#808080";
resultsStyle.border = "2px solid black";
