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

    return choice;
}

function getHumanChoice() {
    // prompt user for input
    let shoot = prompt("Rock, paper, scissors, shoot! ")
    let choice = "";

    // check if input is valid
    if (shoot.toLowerCase() === "rock") {
        choice = "rock";
    } else if (shoot.toLowerCase() === "paper") {
        choice = "paper";
    } else if (shoot.toLowerCase() === "scissors") {
        choice = "scissors";
    } else {
        choice = "invalid";
    }

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let statement = "";

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
        console.log("statement: " + statement);
    }

        for (i = 0; i < 5; i++) {
            playRound(getComputerChoice(), getHumanChoice());
        }
}

playGame();