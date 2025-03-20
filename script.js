function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); // 0, 1, or 2
    let choice = "";

    // 0 = rock, 1 = paper, 2 = scissors
    if (random === 0) {
        choice = "rock";
    } else if (random === 1) {
        choice = "paper";
    } else if (random === 2) {
        choice === "scissors";
    }

    console.log("computer choice: " + choice);
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("choice?");

    console.log("human choice: " + humanChoice);
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    let statement;
    if ((humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")) {
            statement = "Tie!";
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            statement = "You win! " + humanChoice + " beats " + computerChoice + "!";
            humanScore++;
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
            statement = "You lose. " + computerChoice + " beats " + humanChoice + "!";
            computerScore++;
        }

        console.log(statement);
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);