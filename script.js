let wins = 0,
    loses = 0,
    tie = 0,
    count = 1;

function computerPlay() {
    const computerChoice = ["rock", "paper", "scissors"]
    let num = Math.floor(Math.random() * 3);

    return computerChoice[num];
}

function playRound(playerSelection, computerSelection) {
    let result =  "";
    let computer = "";

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

    if (result.slice(4, 7) == "Win") {
        wins += 1;
    }
    else if (result.slice(4, 8) == "Lose") {
        loses += 1;
    } else {
        tie += 1;
    }

    return "Computer play: " + computerSelection + "!\n" + result;
}

function game() {
    let player =  prompt("Pick your choice: rock, paper, or scissors!");

    console.log(playRound(player, computerPlay()));
}

while (count <= 5) {
    game();
    count++;
}

if (wins > loses) {
    console.log(
        "Wins: " + wins +
        "\nComputer wins: " + loses +
        "\nTies: " + tie +
        "\n\nYOU WIN!!!"
    );
}
else if (wins < loses) {
    console.log(
        "Wins: " + wins +
        "\nComputer wins: " + loses +
        "\nTies: " + tie +
        "\n\nYOU LOSE!!!"
    );
} else {
    console.log(
        "Wins: " + wins +
        "\nComputer wins: " + loses +
        "\nTies: " + tie +
        "\n\nIT'S A TIE!!!"
    );
}