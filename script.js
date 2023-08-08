function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function getPlayerChoice() {
//   let selection = ["rock", "paper", "scissors"];
//   return selection;
// }

function playRound(playerSelection, computerSelection) {
  // playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("You win!");
  } else {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("Computer wins.");
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
// }

// game();

//method 1
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", (e) => {
  playRound("rock");
});

paperBtn.addEventListener("click", (e) => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", (e) => {
  playRound("scissors");
});
