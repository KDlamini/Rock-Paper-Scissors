//Retrive DOM elements
const input = document.querySelectorAll(".input");
let outputField = document.querySelector("#output")
const results = document.querySelector("#results")
const clearBtn = document.querySelector(".clear")

//Declare variables globally
let wins = 0,
    loses = 0,
    tie = 0,
    cache = "";

//Retrive input values and play game
input.forEach(element => {
    element.addEventListener('click', (e) => {
        //reset automatically if player continues without clearing
        if (outputField.value == cache) {
            clear();
        }
        game(e.target.value);
    })
});

//Create a function that will handle the computers selection
function computerPlay() {
    const selection = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);

    return selection[index];
}

//Create a function that will handle conditions for player and computer's selection and console result
function playRound(playerSelection, computerSelection) {
    let result =  "";

    if (playerSelection == "rock" && computerSelection == "scissors") {
        result =  "You Win! Rock beats Scissors";
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

    //count wins and loses per round
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

//play game and output results
function game(play) {
    outputField.value += playRound(play, computerPlay()) + "\n\n";
}

 //handle results after all rounds have been completed
function displayResults() {
    if (wins > loses) {
        outputField.value = "Wins: " + wins +
                            "\nComputer wins: " + loses +
                            "\nTies: " + tie +
                            "\n\nYOU WIN!!!";
    }
    else if (wins < loses) {
        outputField.value = "Wins: " + wins +
                            "\nComputer wins: " + loses +
                            "\nTies: " + tie +
                            "\n\nYOU LOSE!!!";
    } else {
        outputField.value = "Wins: " + wins +
                            "\nComputer wins: " + loses +
                            "\nTies: " + tie +
                            "\n\nIT'S A TIE!!!";
    }
    
    cache = outputField.value;
}

//clear all fields and start afresh
function clear() {
    outputField.value = "";
    wins = 0;
    loses = 0;
    tie = 0;
    cache = "";
}

clearBtn.addEventListener('click', clear);
results.addEventListener('click', displayResults);