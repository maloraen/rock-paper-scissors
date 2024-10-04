const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); // 0, 1, or 2
    let choice = "";

    // 0 = rock, 1 = paper, 2 = scissors
    if (random === 0) {
        choice = "rock";
    } else if (random === 1) {
        choice = "paper";
    } else if (random === 2) {
        choice = "scissors";
    }

    console.log("computer choice: " + choice);
    return choice;
}

// instead of prompting user for input, they are pressing a button
// so when user presses button, log the name of that button as the input ?
function getHumanChoice(event) {
    let choice = "";

    if (event.target.classList.contains('rock')) {
        choice = "rock";
    } else if (event.target.classList.contains('paper')) {
        choice = "paper";
    } else if (event.target.classList.contains('scissors')) {
        choice = "scissors";
    }

    console.log("human choice: " + choice);
    return choice;
}


let humanScore = 0;
let computerScore = 0;
let statement = "";

function playGame() {
    function playRound(computerChoice, humanChoice) {
        if ((computerChoice === "rock" && humanChoice === "rock") ||
            (computerChoice === "paper" && humanChoice === "paper") ||
            (computerChoice == "scissors" && humanChoice === "scissors")) {
            statement = "Tie!";
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {
            statement = "you lose. " + computerChoice + " beats " + humanChoice + ".";
            computerScore++;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            statement = "you win! " + humanChoice + " beats " + computerChoice + ".";
            humanScore++;
        }
        console.log(statement);
        console.log("scores: \ncomputer: " + computerScore + "\nuser: " + humanScore);
    }

    rockButton.addEventListener('click', function (event) {
        playRound(getComputerChoice(), getHumanChoice(event));
    });

    paperButton.addEventListener('click', function (event) {
        playRound(getComputerChoice(), getHumanChoice(event));

    });

    scissorsButton.addEventListener('click', function (event) {
        playRound(getComputerChoice(), getHumanChoice(event));

    });
}


playGame();