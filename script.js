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
