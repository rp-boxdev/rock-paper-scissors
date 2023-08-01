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

function getPlayerChoice() {
  let selection = prompt("Rock, paper, or scissors?");
  return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("Computer wins.");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("You win!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("You win!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("Computer wins.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("Computer wins.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("You win!");
  }
}
