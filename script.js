function computerPlay() {
    const computerChoice = ["rock", "paper", "scissors"]
    let num = Math.floor(Math.random() * 3);

    return computerChoice[num];
}

function playRound(playerSelection, computerSelection) {
    let result =  "";

    if (playerSelection == "rock" && computerSelection == "scissors") {
        result =  "You Win! Rock beats Scisssors";
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lose! Paper beats Rock";
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You Win! Paper beats Rock";
    } 
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You Lose! Scissors beats Paper";
    } 
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You Win! Scissors beats Paper";
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You Lose! Rock beats Scissors";
    } else {
        result = "It's a Tie!";
    }

    return result;
}