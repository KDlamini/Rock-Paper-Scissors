//Retrive DOM elements
const input = document.querySelectorAll(".input");
let display = document.querySelector("#output")
const results = document.querySelector("#results")
const clearBtn = document.querySelector(".clear")

//Declare variables globally
let wins = 0,
    loses = 0,
    tie = 0,
    cache = "";

//Retrive user input values and play game
input.forEach(element => {
    element.addEventListener('click', (e) => {
        //reset automatically if player continues without clearing
        if (display.value == cache) {
            clear();
        }
        game(e.target.value);
        updateScroll();
    })
});

//Handle the computers selection
function computerPlay() {
    const selection = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);

    return selection[index];
}

//Handle conditions for player and computer's selection
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

    countWins(result);
    return "Computer play: " + computerSelection + "!\n" + result;
}

//Play game and display output
function game(player) {
    display.value += playRound(player, computerPlay()) + "\n\n";
}

//Count wins and loses per round
function countWins(result) {
    if (result.slice(4, 7) == "Win") {
        wins += 1;
    }
    else if (result.slice(4, 8) == "Lose") {
        loses += 1;
    } else {
        tie += 1;
    }
}

 //Handle results after rounds have been completed
function displayResults() {
    display.value = "Wins: " + wins +
                    "\nComputer wins: " + loses +
                    "\nTies: " + tie
     
    if (wins > loses) {
        display.value += "\n\nYOU WIN!!!";

    }else if (wins < loses) {
        display.value += "\n\nYOU LOSE!!!";

    } else {
        display.value += "\n\nIT'S A TIE!!!";
    }
    
    cache = display.value;
}

//Clear all fields and start again
function clear() {
    display.value = "";
    wins = 0;
    loses = 0;
    tie = 0;
    cache = "";
}

//Handle content, keep scroll down unless user scolls up
function updateScroll() {
    display.scrollTop = display.scrollHeight;
}

clearBtn.addEventListener('click', clear);
results.addEventListener('click', displayResults);